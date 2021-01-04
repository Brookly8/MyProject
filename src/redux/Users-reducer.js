import {UsersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_FETCHING = 'FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case SET_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching})
export const setFollowingProgress = (isFetching, userId) => ({type: SET_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, id))
        UsersAPI.followButton(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(setFollowingProgress(false, id))
            })
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, id))
        UsersAPI.unfollowButton(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(setFollowingProgress(false, id))
            })
    }
}

export default UsersReducer
import {UsersAPI} from "../api/api";
import {setFollowingProgress, unfollow} from "./Users-reducer";

const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USERS_DATA, data: {id, email, login}})

export const authThunkCreator = () => {
    return (dispatch) => {
        UsersAPI.userLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export default authReducer
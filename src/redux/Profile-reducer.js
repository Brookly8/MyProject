import {UsersAPI} from "../api/api";
import {setFollowingProgress, unfollow} from "./Users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    PostData: [
        {id: 1, message: 'Nice weather!', likes: '55'},
        {id: 2, message: 'How are you???', likes: '34'},
        {id: 2, message: 'Nice job dude!', likes: '66'}
    ],
    newPostText: '',
    profile: null
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                PostData: [...state.PostData, {
                    id: 5,
                    message: state.newPostText,
                    likes: 0
                }]
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const userProfileThunkCreator = (userId) => {
    return (dispatch) => {
        if(!userId){userId=5}
        UsersAPI.userProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export default ProfileReducer
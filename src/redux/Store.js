import ProfileReducer from "./Profile-reducer";
import {act} from "@testing-library/react";
import SidebarReducer from "./Sidebar-reducer";
import DialogsReducer from "./Dialogs-reducer";

let store = {
    _state: {
        ProfilePage: {
            PostData: [
                {id: 1, message: 'darova yopt', likes: '55'},
                {id: 2, message: 'kak dila', likes: '34'},
                {id: 2, message: 'Nice job dude!', likes: '66'}
            ],
            newPostText: ''
        },
        DialogsPage: {
            DialogsData: [
                {id: 1, name: 'Krem'},
                {id: 2, name: 'Vasilisk'},
                {id: 3, name: 'Buriy'},
                {id: 4, name: 'Yazyk'},
                {id: 5, name: 'Igar'}
            ],
            messagesData: [
                {id: 1, message: 'Hello world!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'See you later))'}
            ],
            newMessageText: ""
        },
        SideBar: {
            FriendsData: [
                {name: 'Igar'},
                {name: 'Vasilisk'},
                {name: 'Buriy'}
            ]
        }
    },
    _callSubscriber() {
        console.log("State was changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }, //паттерн observer

    dispatch(action) {

        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action)
        this._state.SideBar = SidebarReducer(this._state.SideBar, action)

        this._callSubscriber(this._state)
    }
}


export default store
window.state = store;
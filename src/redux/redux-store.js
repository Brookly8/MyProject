import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import SidebarReducer from "./Sidebar-reducer";
import UsersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SideBar: SidebarReducer,
    UsersPage: UsersReducer,
    auth:authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store
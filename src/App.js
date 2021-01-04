import './App.css';
import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Settings from "./Components/Navbar/Settings/Settings";
import Friends from "./Components/Navbar/Friends/Friends";
import DialogsContainer from "./Components/Navbar/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Navbar/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' component={Friends}/>
            </div>
        </div>
    )
}

export default App;

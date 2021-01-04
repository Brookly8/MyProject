import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsBest from "./Friends/FriendsBest/FriendsBest";


const Navbar = (props) => {
    let FriendsElements = props.friends.map(friends => <FriendsBest name={friends.name} key={friends.id} id={friends}/>)

    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='dialogs' activeClassName={style.active}>Messages</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='news' activeClassName={style.active}>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='music' activeClassName={style.active}>Music</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='settings' activeClassName={style.active}>Settings</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='friends' activeClassName={style.active}>Friends</NavLink>
            {FriendsElements}
        </div>
    </nav>
}

export default Navbar
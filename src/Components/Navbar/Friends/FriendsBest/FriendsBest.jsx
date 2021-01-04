import React from 'react'
import style from './FriendsBest.module.css'
import {NavLink} from "react-router-dom";


const FriendsBest = (props) => {
    return (
        <div className={style.item}>
            <div>
                <img
                    src='https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/1ecfc7c3-8b2b-43d8-94f7-947c1bdb4a95/3504252309/masa-cool-wallpapers-wallpaper-hd-background-screenshot.jpg'/>
            </div>
            <div>
                <NavLink to={props.name} activeClassName={style.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default FriendsBest
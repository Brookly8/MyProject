import React from 'react';
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <div>
            <img src='https://www.citypng.com/public/uploads/preview/-41601314003cc85anibww.png'/>
        </div>
        <div className={style.loginBlock}>
            {props.isAuth ?  props.login :
            <NavLink to={`/Login`}>Login</NavLink> }
        </div>
    </header>
}
export default Header
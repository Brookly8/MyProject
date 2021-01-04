import React from 'react'
import style from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogPeople = (props) => {
    return (
        <div className={style.dialog}>
            <img src='https://images-na.ssl-images-amazon.com/images/I/81YDuTWSHyL.png'/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}



export default DialogPeople
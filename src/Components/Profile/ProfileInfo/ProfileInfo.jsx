import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        <div className={style.img}>
            <img src='https://w-dog.ru/wallpapers/15/15/562916130553730.jpg'/>
        </div>
        <div className={style.item}>
            <img src={props.profile.photos.large}/>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.fullName}</div>
        </div>
    </div>

}
export default ProfileInfo
import React from "react"
import style from "./Users.module.css";
import UserPhoto from "../../Asets/images/user-male.png";
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../../api/api";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                       <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={style.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           props.unfollowThunkCreator(u.id)
                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                           props.followThunkCreator(u.id)
                        }}>Follow</button>}
                        </div>
                        </span>
                <span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        </span>
                        <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                        </span>
                        </span>

            </div>)
        }
    </div>
}

export default Users
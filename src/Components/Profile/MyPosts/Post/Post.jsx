import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return <div>
        <div className={style.item}>
            <img src='https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg'/>
            {props.message}
            <div>
                <button>Like</button>
                {props.likes}
            </div>
        </div>

    </div>

}
export default Post
import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = React.createRef()

    let addPostButton = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = postElement.current.value
        props.updateNewPostText(text)
    }

    let PostElements = props.posts.map(post => <Post message={post.message} key={post.id} likes={post.likes}/>)

    return <div>
        <div className={style.item}>
            <h2>my posts</h2>
        </div>
        <div className={style.item}>
            <textarea placeholder='New Post' onChange={onPostChange} ref={postElement} value={props.newPostText}/>
            <button onClick={addPostButton}>add post</button>
        </div>
        <div className={style.item}>
            {PostElements}
        </div>
    </div>

}
export default MyPosts
import React from 'react'
import style from './Dialogs.module.css'
import DialogPeople from "./DialogPeople/DialogPeople";
import Message from "./Message/Messages";


const Dialogs = (props) => {

    let WriteMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateMessageText(text)
    }

    let dialogElements = props.dialog.map(dialog => <DialogPeople name={dialog.name} key={dialog.id} id={dialog.id}/>)

    let messagesElements = props.message.map(message => <Message id={message.id} key={message.id} message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
                <textarea placeholder='New Message' onChange={onMessageChange} value={props.newMessageText}></textarea>
                <button onClick={WriteMessage}>Write Message</button>
            </div>
        </div>
    )
}

export default Dialogs
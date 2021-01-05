import React from 'react'
import {addMessageActionCreator, updateNewMessageCreator} from "../../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialog: state.DialogsPage.DialogsData,
        message: state.DialogsPage.messagesData,
        newMessageText: state.DialogsPage.newMessageText,
        isAuth:state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateNewMessageCreator(text))
        }
    }
}

let AuthRedirectComponent=withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer
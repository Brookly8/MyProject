const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    DialogsData: [
        {id: 1, name: 'Krem'},
        {id: 2, name: 'Vasilisk'},
        {id: 3, name: 'Buriy'},
        {id: 4, name: 'Yazyk'},
        {id: 5, name: 'Igar'}
    ],
    messagesData: [
        {id: 1, message: 'Hello world!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'See you later))'}
    ],
    newMessageText: ""
}

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {
                    id: 4,
                    message: state.newMessageText
                }
                ]
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newMessage: text})

export default DialogsReducer
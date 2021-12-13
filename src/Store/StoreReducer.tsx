const defaultMessages = {
    messages: [{userID: 3782, userMessage: "Hello guys"}, {userID: 3783, userMessage: "Hello!"}],
    userCount: 0 
} 
interface IAction {
    type: string,
    payload: number | IUserMessage
}
const addNewMessage = 'addNewMessage';
const deleteMessage = 'deleteMessage';
const updateUserCount = 'updateUserCount';

const storeReducer = (state = defaultMessages, action: IAction): any => {
    switch(action.type) {
        case addNewMessage:
            return {...state, messages: [...state.messages, action.payload]};
        case updateUserCount:
            return {...state, userCount: action.payload}
        default:
            return state;
    }
}
export interface IUserMessage {
    userID: number,
    userMessage: string
}
export default storeReducer;
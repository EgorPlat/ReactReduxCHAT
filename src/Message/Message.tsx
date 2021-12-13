import React from "react";
import { IUserMessage } from "../Store/StoreReducer";
import { Alert } from "react-bootstrap";
import './Message.css';

interface IMessage {
    message: IUserMessage
}
const Message: React.FunctionComponent<IMessage> = ({message}) => {
    return(
        <div className="message">
            <div className="message-each">
               <Alert key={message.userMessage} variant={'warning'} className="message-each-children">
                  {message.userMessage}
               </Alert>
            </div>
        </div>
    )
}

export default Message;
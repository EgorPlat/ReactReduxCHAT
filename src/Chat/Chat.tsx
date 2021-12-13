import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Circle from "../Circle/Circle";
import Message from "../Message/Message";
import { IUserMessage } from "../Store/StoreReducer";
import Input from "../UI/Input/Input";
import './Chat.css'

interface IChat {
    ws: WebSocket
}
const Chat: React.FunctionComponent<IChat> = ({ws}) => {
    
    const dispatch = useDispatch();
    const chatStore = useSelector((store: any) => store.chatStore);
    const [userID, setUserID] = useState<number>();
    const [userMessage, setUserMessage] = useState<string>();

    useEffect(() => {
        ws.onopen = () => {
            console.log('Соединение открыто...');
        }
        ws.onmessage = (message: any) => {
            let messageData = JSON.parse(message.data);
            if(messageData.counter) {
                dispatch({type: 'updateUserCount', payload: messageData.counter});
            }
            if(messageData.userID) {
                setUserID(() => messageData.userID);
            }
            if(messageData.userMessage) {
                dispatch({type: 'addNewMessage', payload: {userID: messageData.userID, userMessage: messageData.userMessage}});
            }
        }
        ws.onclose = () => {
            console.log('Соединение закрыто...')
        }
        return () => {
            ws.close();
        }
    }, [])
    
    const changeMessage = (message: string) => {
        setUserMessage(() => message);
    }
    const sendNewMessage = (key: string) => {
        if(key === "Enter"){
            ws.send(JSON.stringify({userID: userID, userMessage: userMessage}))
        }
    }
    return(
        <div className="chat">
          <div className="chat-info">
              <Circle userCount={chatStore.userCount}/>
          </div>
          <div className="chat-messages">
            { chatStore.messages.map((message: IUserMessage) => <Message message={message}/>) }
          </div>
          <div className="chat-form">
              <Input type="text" placeholder="Введите сообщение" onChange={(event) => changeMessage(event.target.value)} onKeyUp={(event) => sendNewMessage(event.key)}/>
          </div>
        </div>
    )
}

export default Chat;
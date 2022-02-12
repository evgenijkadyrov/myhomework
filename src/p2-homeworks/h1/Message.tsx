import React from 'react'
import m from './Message.module.css';

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={m.messageItem}>
            <div><img className={m.avatar} src={props.avatar}/></div>
            <div className={m.arrow}></div>
            <div className={m.item}>
                <div className={m.name}> {props.name}</div>
                <div className={m.message}>{props.message}</div>
                <div className={m.data}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message

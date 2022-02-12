import React from 'react'
import a from './AlternativeMessage.module.css'

type AlternativeMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string,
    read: string,
}

function AlternativeMessage(props: AlternativeMessage) {
    return (

        <div className={a.messageItem}>
            <div><img className={a.avatar} src={props.avatar}/></div>
            <div className={a.arrow}></div>
            <div className={a.item}>
                <div className={a.name}> {props.name}</div>
                <div className={a.message}>{props.message}</div>
                <div className={a.container}>
                    <div className={a.data}>{props.time}</div>
                    <div className={a.bird} id={`a.${props.read}`}><i className={a.check}></i>
                        <i className={a.check2}></i></div>
                </div>
            </div>

        </div>
    )
}

export default AlternativeMessage

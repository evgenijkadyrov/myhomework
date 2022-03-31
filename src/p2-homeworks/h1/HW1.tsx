import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Dimych',
    message: 'are you vzobivaesh?',
    time: '22:00',
    read: 'true'
}
const messageData2 = {
    avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
    name: 'Yauhen',
    message: 'kto ne vzobyvaet tot ne est!',
    time: '22:10',
    read: 'true'
}

function HW1() {
    return (
        <div>
            <hr/>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
                read={messageData2.read}/>
            <hr/>
        </div>
    )
}

export default HW1

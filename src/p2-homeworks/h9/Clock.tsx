import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
                       setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const stringTime = [`${date?.getHours()}:${date?.getMinutes()}:${date?.getSeconds()}`]// fix with date

    const stringDate = date.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit',year:'numeric' }) // fix with date

    return (
        <div className={style.container}>
            <>
                <div className={style.time}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}

                </div>
            </>

            {show ? (
                <div className={style.time}>
                    {stringDate}
                </div>
            ):<div className={style.empty} ></div>}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

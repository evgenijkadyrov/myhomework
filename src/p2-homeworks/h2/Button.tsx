import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button className={s.filterButton} onClick={onClickHandler}> {props.name}</button>
    )
}

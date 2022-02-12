import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
const colorName={
        color: props.affair.priority==='high'? "red":props.affair.priority==='middle'? "orange":"blue"
}
    return (
        <div className={s.wrapper}>
            <div className={`${s.block} ${s.item}`}><span className={s.name}>{props.affair.name}</span>
                <span style={colorName} className={`${s.priority} ${s.item}`}>{props.affair.priority}</span>

                <button className={s.button}  onClick={deleteCallback}>X</button>

            </div>
        </div>
    )
}

export default Affair

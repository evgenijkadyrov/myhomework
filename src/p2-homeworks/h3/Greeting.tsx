import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = ` ${s.classic} ${error ? s.error : ''}`// need to fix with (?:)
    const disableButtonHandler = error ? true : false
    const onPressEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addUser()
    }
    return (
        <div>
            <div className={s.container}>
                <SuperInputText value={name} onChange={setNameCallback} className={inputClass}
                                onKeyPress={onPressEnterHandler} placeholder={'Enter name'}/>
                {/* <input value={name} onChange={setNameCallback} className={inputClass}
                       onKeyPress={onPressEnterHandler} placeholder={'Enter name'}/>*/}
                <span className={s.usersValue}>{totalUsers}</span></div>
            <div className={s.error_text}>{error}</div>
            <SuperButton className={s.button} onClick={addUser} disabled={disableButtonHandler}>Add</SuperButton>
            {/* <button className={s.button} onClick={addUser} disabled={disableButtonHandler}>add</button>*/}

        </div>
    )
}

export default Greeting

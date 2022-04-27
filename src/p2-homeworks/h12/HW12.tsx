import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";

import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

export type themesType = string
const theme = 'dark'|| 'red'||'some';

function HW12() {
    //@ts-ignore
    let theme = useSelector<AppStoreType, string>(state=>state.theme.theme); // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (value:string) => {
        dispatch(changeThemeC(value))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <button value='dark' onClick={(e)=>onChangeCallback(e.currentTarget.value)}>Dark</button>
            <button value ='red' onClick={(e)=>onChangeCallback(e.currentTarget.value)}>Red</button>


            <hr/>
        </div>
    );
}

export default HW12;

import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";

import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

export type themesType = string
const themes = ['dark', 'red', 'some','myself'];

function HW12() {

    let theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch()
    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>


            <SuperRadio name={'radio'}
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}/>

            <hr/>
            <div className={s[theme + '-text']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aspernatur autem deserunt doloremque dolores, earum eligendi ex harum libero, natus nesciunt nobis odio pariatur provident quisquam repellendus! Ipsum, odio.
            </div>
        </div>
    );
}

export default HW12;

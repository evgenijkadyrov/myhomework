import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Router';
import './pages/Header.css'

function Header() {
    return (
        <div className={'common'}>
            <NavLink className={'link'} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink className={'link'} to={PATH.JUNIOR}>junior</NavLink>
            <NavLink className={'link'} to={PATH.JUNIOR_OLD}>junior+</NavLink>
            <div className={'menu'}>Level status</div>
        </div>

    )
}

export default Header



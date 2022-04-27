import {themesType} from "../HW12";

const initState = {
theme:'some'
};
type initStateType=typeof initState
export const themeReducer = (state:initStateType = initState, action: ChangeThemesAT): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEMES": {
            return {...state,theme: action.theme} ;
        }
        default: return state;
    }
};
export type ChangeThemesAT={
    type:"CHANGE-THEMES"
    theme:themesType
}
export const changeThemeC = (theme:themesType): ChangeThemesAT => { return {type:"CHANGE-THEMES", theme}}; // fix any
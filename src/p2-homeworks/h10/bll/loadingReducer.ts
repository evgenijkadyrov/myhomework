const initState = {
    preloading: false
}
type initStateType = typeof initState
export const loadingReducer = (state: initStateType = initState, action: loadingAT): initStateType => { // fix any
    switch (action.type) {
        case 'ACTIVATE-PRELOADER': {
            return {...state, preloading: action.preloading}
        }
        default:
            return state
    }
}
type loadingAT = {
    type: 'ACTIVATE-PRELOADER',
    preloading: boolean
}

export const loadingAC = (preloading: boolean): loadingAT => {
    return {type: 'ACTIVATE-PRELOADER', preloading}
} // fix any
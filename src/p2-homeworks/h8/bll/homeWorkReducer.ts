import {UserType} from "../HW8";

export type SortAT = {
    type: 'sort'
    payload: string
}
export type CheckAT = {
    type: 'check'
    payload: number
}
export type ActionsType = SortAT | CheckAT
export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a, b) => (action.payload === 'up')
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name))
        }

        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
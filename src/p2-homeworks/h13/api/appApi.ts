import axios from 'axios'

export const RequestAPI = {
    updateRequiest(success: boolean) {
        const promise = axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
        return promise
    }
}
type ResponseType = {
    errorText: string,
    info: string,
    yourBody: { success: boolean },
    yourQuery: {}
}
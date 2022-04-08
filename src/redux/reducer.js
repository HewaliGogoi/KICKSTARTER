import {LOGIN,LOGOUT,AUTH} from './actionType'

let init = {user:{email:"",password:""}, isAuth:false}

export const reducer = (state = init, {type, payload}) =>{
    // console.log(state, "6")
    switch(type){
        case LOGIN:
        return{
            ...state,user:{...payload}
        }

        case AUTH:
            return {
                ...state,isAuth:!state.isAuth
            }
        case LOGOUT:
        return {
            ...state,user:{email:"",password:""},isAuth:false
        }

        default:
        return state
    }
}
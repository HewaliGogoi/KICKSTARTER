import {LOGIN,LOGOUT,AUTH, DATA} from './actionType'

let init = {user:{email:"",password:""}, isAuth:false, single:null}

export const reducer = (state = init, {type, payload}) =>{
    // console.log(state, "6")
    switch(type){
        case LOGIN:
        return{
            ...state,user:{...payload}, isAuth:true
        }

        case AUTH:
            return {
                ...state,isAuth:!state.isAuth
            }
        case LOGOUT:
        return {
            ...state,user:{email:"",password:""},isAuth:false
        }

        case DATA:
            return{
                ...state, single:payload
            }

        default:
        return state
    }
}
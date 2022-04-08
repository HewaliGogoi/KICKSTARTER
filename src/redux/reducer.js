import {LOGIN,LOGOUT} from './actionType'

let init = {user:{email:"",password:""}, isAuth:false}

export const reducer = (state = init, {type, payload}) =>{
    switch(type){
        case LOGIN:
        return{
            ...state,user:payload,isAuth:true
        }
        case LOGOUT:
        return {
            ...state,user:{email:"",password:""},isAuth:false
        }

        default:
        return state
    }
}
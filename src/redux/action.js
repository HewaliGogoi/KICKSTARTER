import  {LOGIN,LOGOUT} from './actionType'


export const loginAction =(payload)=>{
    return{
        type:LOGIN,
        payload
    }
}


export const logoutAction =(payload)=>{
    return{
        type:LOGOUT,
        payload
    }
}
import  {AUTH, LOGIN,LOGOUT} from './actionType'


export const loginAction =(payload)=>{
    return{
        type:LOGIN,
        payload
    }
}


export const logoutAction =()=>{
    return{
        type:LOGOUT
    }
}

export const changeAuth =()=>{
    return {
        type:AUTH
    }
}
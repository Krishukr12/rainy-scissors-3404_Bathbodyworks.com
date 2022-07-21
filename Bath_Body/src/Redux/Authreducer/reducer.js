import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actiontypes"

const initstate={
    token:"",
    isLoading:false,
    isError:false,
    isAuth:false
}

export const reducer=(state=initstate,action)=>{
switch(action.type){
    case LOGIN_LOADING:{
        return {...state,isLoading:true}
    }
    case LOGIN_SUCCESS:{
        return {...state,isAuth:true,token:action.payload,isLoading:false,isError:false}
    }
    case LOGIN_ERROR:{
        return {...state,isAuth:false,isLoading:false,isError:true}
    }
    default:
    return state
}
}
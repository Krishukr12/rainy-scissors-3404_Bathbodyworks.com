import { ClearlocalStorage, GetItem, SetItem, useGetItem } from "../../bharat/LocalStorage"
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./actiontypes"

const initstate={
    token:GetItem()||"",
    isLoading:false,
    isError:false,
    isAuth: GetItem()?true:false
}

export const reducer=(state=initstate,action)=>{
switch(action.type){
    case LOGIN_LOADING:{
        return {...state,isLoading:true}
    }
    case LOGIN_SUCCESS:{
        
       SetItem(action.payload)
       console.log(action.payload)
        return {...state,isAuth:true,token:action.payload,isLoading:false,isError:false}
    }
    case LOGIN_ERROR:{
        return {...state,isAuth:false,isLoading:false,isError:true}
    }
    case LOGOUT:{
        localStorage.clear()
    return {...state,token:"",isAuth:false,isLoading:false,isError:false}
    }
    default:
    return state
}
}
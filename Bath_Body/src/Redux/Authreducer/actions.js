import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./actiontypes"
import axios from "axios"


export const signin=(data)=>(dispatch)=>{
    console.log(data);
    dispatch({type:LOGIN_LOADING})
return axios.post("https://masai-api-mocker.herokuapp.com//auth/login",data).then((r)=>dispatch({type:LOGIN_SUCCESS,payload:r.data})).catch((e)=>dispatch({type:LOGIN_ERROR}))
}

export const signup=(data)=>(dispatch)=>{
    console.log(data);
    dispatch({type:SIGNUP_LOADING})
return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",data).then((r)=>{dispatch({type:SIGNUP_SUCCESS,payload:r.data});console.log(r.data)}).catch((e)=>dispatch({type:SIGNUP_ERROR}))
}

import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actiontypes"
import axios from "axios"



export const signin=(data)=>(dispatch)=>{
    console.log(data);
    dispatch({type:LOGIN_LOADING})
return axios.post("https://masai-api-mocker.herokuapp.com/",data).then((r)=>dispatch({type:LOGIN_SUCCESS,payload:r.data})).catch((e)=>dispatch({type:LOGIN_ERROR}))
}
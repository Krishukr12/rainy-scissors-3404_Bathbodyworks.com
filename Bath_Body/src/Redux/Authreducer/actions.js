import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./actiontypes"
import axios from "axios"


export const signin=(data)=>(dispatch)=>{
    console.log(data);
    dispatch({type:LOGIN_LOADING})
  return axios({
   url: "https://masai-api-mocker.herokuapp.com/auth/login",
   method: "post",
   data: {
     username:data.username,  
     password:data.password,
   },
 })
 .then((res) => {
 // console.log(res.data);
  dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
})
.catch((err) => {
  console.log(err);
  dispatch({ type: LOGIN_ERROR, payload: err.data.error });
});
}

export const signup=(data)=>(dispatch)=>{
    dispatch({type:SIGNUP_LOADING})
  axios.post("https://masai-api-mocker.herokuapp.com/auth/register",{
  "name": data.name,
  "email": data.email,
  "password": data.password,
  "username": data.username,
  "mobile": data.mobile,
  "description": "A Transformation in education!" 
}).then((r)=>{return dispatch({type:SIGNUP_SUCCESS,payload:r.data});console.log(r.data)}).catch((e)=>dispatch({type:SIGNUP_ERROR}))
}

export const logout=()=>(dispatch)=>{
  console.log("logout_action")
  dispatch({type:LOGOUT})
}
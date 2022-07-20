import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";
import axios from 'axios'

export const getData_success=(data)=>({
    type:GET_DATA_SUCCESS,
    payload:data
})

export const getData_req=()=>({
    type:GET_DATA_REQUEST
})
export const getData_fail=()=>({
    type:GET_DATA_FAIL
})

export const getData=()=>(dispatch)=>{
  dispatch(getData_req());
  return axios({
    url:'http://localhost:8080/shop_body',
    method:'GET'
  }).then((res)=>{
    dispatch(getData_success(res.data));
    console.log(res.data);
  }).catch((err)=>{
    dispatch(getData_fail());
    console.log(err);
  })
}
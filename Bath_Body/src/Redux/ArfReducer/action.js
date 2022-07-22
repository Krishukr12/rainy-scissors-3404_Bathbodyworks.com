
import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_SUCCESS_SINGLE } from "./actionType";
import axios from 'axios'

export const getData_success=(data)=>({
    type:GET_DATA_SUCCESS,
    payload:data
})
export const getData_success_single=(data)=>({
    type:GET_DATA_SUCCESS_SINGLE,
    payload:data
})

export const getData_req = () => ({
  type: GET_DATA_REQUEST,
});
export const getData_fail = () => ({
  type: GET_DATA_FAIL,
});

export const getData = () => (dispatch) => {
  dispatch(getData_req());
  return axios({
    url:'http://localhost:8080/shop_body',
    method:'GET'
  }).then((res)=>{
    dispatch(getData_success(res.data));
  }).catch((err)=>{
    dispatch(getData_fail());
    console.log(err);
  })
}
export const getDataSingle=(id)=>(dispatch)=>{
  dispatch(getData_req());
  return axios({
    url:`http://localhost:8080/newFragrance/${id}`,
    method:'GET'
  }).then((res)=>{
    dispatch(getData_success_single(res.data));
  }).catch((err)=>{
    dispatch(getData_fail());
    console.log(err);
  })
}
export const getData1=()=>(dispatch)=>{
  dispatch(getData_req());
  return axios({
    url:'http://localhost:8080/Moisturizers',
    method:'GET'
  }).then((res)=>{
    dispatch(getData_success(res.data));
  }).catch((err)=>{
    dispatch(getData_fail());
    console.log(err);})
};
export const getData2 = () => (dispatch) => {
  dispatch(getData_req());
  return axios({
    url: "http://localhost:8080/candle",
    method: "GET",
  })
    .then((res) => {
      dispatch(getData_success(res.data));
    })
    .catch((err) => {
      dispatch(getData_fail());
      console.log(err);
    });
};
export const getData3 = () => (dispatch) => {
  dispatch(getData_req());
  return axios({
    url: "http://localhost:8080/newFragrance",
    method: "GET",
  })
    .then((res) => {
      dispatch(getData_success(res.data));
    })
    .catch((err) => {
      dispatch(getData_fail());
      console.log(err);
    });
};

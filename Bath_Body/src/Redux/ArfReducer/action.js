
import { GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_SUCCESS_SINGLE, UPDATE_DATA_ASCC } from "./actionType";
import axios from 'axios'

export const getData_success=(data)=>({
    type:GET_DATA_SUCCESS,
    payload:data
});
export const updateDataAsc = (newData) => {
  return {
    type: UPDATE_DATA_ASCC,
    payload: newData,
  };
};
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
    url:'https://bathandbodyherokuapi.herokuapp.com/shop_body',
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
    url:`https://bathandbodyherokuapi.herokuapp.com/shop_body/${id}`,
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
    url:'https://bathandbodyherokuapi.herokuapp.com/Moisturizers',
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
    url: "https://bathandbodyherokuapi.herokuapp.com/candle",
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
    url: "https://bathandbodyherokuapi.herokuapp.com/newFragrance",
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
export const getData2candle = (dispatch, value) => {
  dispatch(getData_req());
  return axios
    .get(`https://bathandbodyherokuapi.herokuapp.com/candle?_sort=price&_order=${value}`)
    .then((r) => {
      dispatch(updateDataAsc(r.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getData2soap = (dispatch, value) => {
  dispatch(getData_req());
  return axios
    .get(`https://bathandbodyherokuapi.herokuapp.com/shop_body?_sort=price&_order=${value}`)
    .then((r) => {
      dispatch(updateDataAsc(r.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getData2fragrance = (dispatch, value) => {
  dispatch(getData_req());
  return axios
    .get(`https://bathandbodyherokuapi.herokuapp.com/newFragrance?_sort=price&_order=${value}`)
    .then((r) => {
      dispatch(updateDataAsc(r.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getData2moisturizers = (dispatch, value) => {
  dispatch(getData_req());
  return axios
    .get(`https://bathandbodyherokuapi.herokuapp.com/Moisturizers?_sort=price&_order=${value}`)
    .then((r) => {
      dispatch(updateDataAsc(r.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
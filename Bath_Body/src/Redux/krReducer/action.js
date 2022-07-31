import axios from "axios";
import {
  GET_FRAGNANCE_DATA_REQUEST,
  GET_FRAGNANCE_DATA_SUCCESS,
  GET_FRAGNANCE_DATA_FAILED,
  UPDATE_DATA_ASC,
  UPDATE_DATA_DESC,
} from "./actionType";

export const requestFragnaceData = () => {
  return {
    type: GET_FRAGNANCE_DATA_REQUEST,
  };
};

export const getFrangnanceData = (data) => {
  return {
    type: GET_FRAGNANCE_DATA_SUCCESS,
    payload: data,
  };
};
export const failedFrangnaceData = () => {
  return {
    type: GET_FRAGNANCE_DATA_FAILED,
  };
};
export const updateDataAsc = (newData) => {
  return {
    type: UPDATE_DATA_ASC,
    payload: newData,
  };
};
export const getData1 = (dispatch) => {
  dispatch(requestFragnaceData());
  return axios
    .get("https://bathandbodyherokuapi.herokuapp.com/newFragrance")
    .then((r) => {
      dispatch(getFrangnanceData(r.data));
    })
    .catch((error) => {
      dispatch(failedFrangnaceData());
    });
};
export const getData2 = (dispatch, value) => {
  return axios
    .get(`https://bathandbodyherokuapi.herokuapp.com/newFragrance?_sort=price&_order=${value}`)
    .then((r) => {
      dispatch(updateDataAsc(r.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

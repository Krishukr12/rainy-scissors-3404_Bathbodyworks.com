import axios from "axios";
import {
  GET_FRAGNANCE_DATA_REQUEST,
  GET_FRAGNANCE_DATA_SUCCESS,
  GET_FRAGNANCE_DATA_FAILED,
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
export const getData1 = (dispatch) => {
  dispatch(requestFragnaceData());
  return axios
    .get("http://localhost:8080/newFragrance")
    .then((r) => {
      dispatch(getFrangnanceData(r.data));
    })
    .catch((error) => {
      dispatch(failedFrangnaceData());
    });
};

import {
  GET_FRAGNANCE_DATA_SUCCESS,
  GET_FRAGNANCE_DATA_FAILED,
  GET_FRAGNANCE_DATA_REQUEST,
  UPDATE_DATA_ASC,
} from "./actionType";
const initalState = {
  Fdata: [],
  isLoading: false,
  isError: false,
};
export const kreducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_FRAGNANCE_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_FRAGNANCE_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        Fdata: action.payload,
        isError: false,
      };
    }
    case GET_FRAGNANCE_DATA_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case UPDATE_DATA_ASC: {
      return {
        ...state,
        Fdata: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

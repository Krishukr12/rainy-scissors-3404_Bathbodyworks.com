import {
   ADD_CART,
} from "./action";


const initState = {
  
  cartProducts: [],
 
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
 
    case ADD_CART:
      return {
        ...state,
        cartProducts: payload,
      };

    default:
      return state;
  }
};

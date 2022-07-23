import {
   ADD_CART, Delete_DATA,
   EDIT_DATA,
} from "./action";


const initState = {
  
  data: [],
  isLoading: false,
  isError: false,
  products: [],
  cartProducts: [],
  totalPrice: 0,
 
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
 
    case ADD_CART:
      return {
        ...state,
        cartProducts: payload,
      };
      case Delete_DATA:
        return {
          ...state,
          cartProducts: payload,
          totalPrice: payload.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.Price * currentValue.quantity;
          }, 0),
        };
      case EDIT_DATA:
        return {
          ...state,
          totalPrice: payload.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.Price * currentValue.quantity;
          }, 0),
        };

    default:
      return state;
  }
};

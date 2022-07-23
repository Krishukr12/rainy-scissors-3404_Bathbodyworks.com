

import axios from "axios";
import { ADD_TOCART_FAILURE, ADD_TOCART_REQUEST, ADD_TOCART_SUCCESS, DELETE_FROM_CART, GET_CART_FALIURE, GET_CART_REQUEST, GET_CART_SUCCESS } from "./actionType";

export const addtocart = async ({ item, dispatch}) => {

       dispatch({
         type: ADD_TOCART_REQUEST,
       });
       return axios({
         url: "http://localhost:8080/cart",
         method: "post",
         data: {
          img:item.img,
          Price:item.Price,
          ratings:item.ratings,
          userid:item.id,
          name:item.name,
          quantity:item.quantity,
          type:item.type,
          // Product_url:item.Product_url,
          subname:item.subname,
          totalPrice:item.price,
         },
       })
         .then((res) => {
            console.log(res.data);
           dispatch({ type: ADD_TOCART_SUCCESS, });
         })
         .catch((err) => {
           console.log(err);
           dispatch({ type: ADD_TOCART_FAILURE });
         });
     };

     export const getCart = async (dispatch) => {
      // console.log('cal')
        dispatch({
          type: GET_CART_REQUEST
        });
        try {
          let res = await axios.get("http://localhost:8080/cart");
          let data = await res.data;
          // console.log(data)
          dispatch({
            type: GET_CART_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: GET_CART_FALIURE
          });
        }
      };
      export const deleteitem =(id)=>(dispatch) => {
        console.log(id);
        return (
          axios.delete(`http://localhost:8080/cart/${id}`)
          .then((res)=>{
            dispatch({
              dispatch:DELETE_FROM_CART,
              payload:id
            })
          }).catch((err)=>console.log(err))
        )
      };
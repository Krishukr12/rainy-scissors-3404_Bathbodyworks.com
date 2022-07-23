import axios from "axios";
export const ERROR_DATA = "ERROR_DATA";
export const REQUEST_DATA = "REQUEST_DATA";
export const GET_DATA = "GET_DATA";
export const CART_DATA = "CART_DATA";
export const Delete_DATA = "Delete_DATA";
export const EDIT_DATA = "EDIT_DATA";
export const ADD_CART = "Add_CART"


export const getCartData =()=> (dispatch) => {
  dispatch(requestData());
  return axios
    .get("http://localhost:8080/cart")
    .then((res) =>
      dispatch({
        type: CART_DATA,
        payload: res.data,
      })
    )
    .catch((err) => dispatch(errorData(err.message)));
};

export const addProducts = async (dispatch,img, name, subname, Price,type) => {
  console.log(img,name);
  let r = await fetch("http://localhost:8080/cart", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      img,
      name,
      subname,
      Price,
      type,
      "quantity":1,
    }),
  });
  let res = await fetch("http://localhost:8080/cart");
  let data = await res.json();
  dispatch({
    type: ADD_CART,
    payload: data,
  })
};

export const editData = async (dispatch,value,id) => {
       let r = await fetch(`http://localhost:8080/cart/${id}`,{
         method: "PATCH",
         headers: { "content-type": "application/json" },
         body: JSON.stringify({
           "quantity":value,
         }),
  });
  let res = await fetch("http://localhost:8080/cart");
  let data = await res.json();
  console.log(data);
  dispatch({
    type: EDIT_DATA,
    payload: data,

  })
};


export const requestData = () => ({
  type: REQUEST_DATA,
});

export const errorData = () => ({
  type: ERROR_DATA,
});


export const deleteProd = async (dispatch, id) => {
  let r = await axios.delete(`http://localhost:8080/cart/${id}`);
  
  let res = await fetch("http://localhost:8080/cart");
  let data = await res.json();
  console.log(data);
  dispatch({
    type: Delete_DATA,
    payload: data,
    
  })
};

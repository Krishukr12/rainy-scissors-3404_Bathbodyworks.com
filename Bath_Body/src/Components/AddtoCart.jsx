import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./AddtoCart.module.css";
import { deleteProd } from "../Redux/souReducer/action";
// import { editData } from "../Redux/souReducer/action";
import { deleteitem, getCart } from "../Redux/CartReducer/action";
import { useRef } from "react";

const AddtoCart = ({ img, name, subname, totalPrice, id,  }) => {
  const [cost, setCost] = useState( totalPrice);
  // const varr=useRef(0);
 
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let TotalPrice = e.target.value * totalPrice;

    setCost(cost+TotalPrice);
    // varr.current=cost;
    // editData(dispatch, e.target.value, id);
  };
  // console.log(cost);
// console.log(varr.current);
  const handleremove = (id) => {
    console.log(id);
    // deleteitem(dispatch,id).then(()=>{getCart(dispatch)});
    dispatch(deleteitem(id)).then(()=>{(getCart(dispatch))});
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img className={styles.prodImg} src={img} alt="" />
      </div>
      <div style={{ textAlign: "start", width: "200px" }}>
        <p>
          {name} ({subname})
        </p>
        <p style={{ color: "green" }}>In Stock</p>
        <div className={styles.qtydiv}>
          <p style={{ marginTop: "3px", marginLeft: "5px" }}>QTY:</p>
          <select
            name=""
            defaultValue={"1"}
            className={styles.qty}
            onChange={handleInput}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="8">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button onClick={()=>handleremove(id)} className={styles.remove}>
          Remove
        </button>
      </div>
      <div style={{ marginLeft: "300px" }}>
        <p>EACH ITEM</p>
        <p style={{ fontSize: "smaller" }}>${totalPrice}</p>
      </div>
      <div style={{ marginLeft: "50px" }}>
        <p>TOTAL</p>
        <p>${cost}</p>
      </div>
    </div>
  );
};

export default AddtoCart;

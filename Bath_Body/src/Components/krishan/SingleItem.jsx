import React from "react";
import classes from "./SingelItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Redux/CartReducer/action";
export const SingleItem = ({ data }) => {
  const dispatch =useDispatch();
  const handleClick = (item) => {
    console.log(item);
   
    addtocart({
      item,
      dispatch,
    });
  };
  return (
    <>
    <div className={classes.singel_item_container}>
    <Link to={`/allcareProducts/${data.id}`}>
      <div>
      <img className={classes.product_image} src={data.img}></img>
      <h3 className={classes.product_title}>{data.name}</h3>
      <h4 className={classes.product_subtitle}>{data.subname}</h4>
      <h5 className={classes.product_price}>₹{data.price * 70} </h5>
      </div>
    </Link>
      <button onClick={()=>handleClick(data)} className={classes.add_to_bag_button}>ADD TO BAG</button>
    </div>
    </>
  );
};

import React from "react";
import classes from "./SingelItem.module.css";
export const SingleItem = ({ data }) => {
  return (
    <div className={classes.singel_item_container}>
      <img className={classes.product_image} src={data.img}></img>
      <h3 className={classes.product_title}>{data.name}</h3>
      <h4 className={classes.product_subtitle}>{data.subname}</h4>
      <h5 className={classes.product_price}>{data.price * 70} ₹</h5>
      <button className={classes.add_to_bag_button}>ADD TO BAG</button>
    </div>
  );
};

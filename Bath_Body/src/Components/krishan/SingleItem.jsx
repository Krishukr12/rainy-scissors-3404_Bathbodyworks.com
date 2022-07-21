import React from "react";
import classes from "./SingelItem.module.css";
export const SingleItem = () => {
  return (
    <div className={classes.singel_item_container}>
      <img className={classes.product_image} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9a2d9927/crop/026481809_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_"></img>
      <h3 className={classes.product_title}>Monster Tree NightLife</h3>
      <h4 className={classes.product_subtitle}>Wallflowers Fragnance Plug</h4>
      <h5 className={classes.product_price}>2000 ₹</h5>
      <button className={classes.add_to_bag_button}>ADD TO BAG</button>
    </div>
  );
};

import React from "react";
import classes from "./HomeFragnance.module.css";
export const HomeFragnance = () => {
  console.log(classes);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.left_side_bar}></div>
      <div className={classes.right_side_bar}>
        <div className={classes.home_frangnace_div}>
          <span>Home Fragrance</span>
        </div>
      </div>
    </div>
  );
};

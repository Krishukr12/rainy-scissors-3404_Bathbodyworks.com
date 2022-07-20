import React from "react";
import classes from "./HomeFragnance.module.css";
import ReactPaginate from "react-paginate";
export const HomeFragnance = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.left_side_bar}></div>
      <div className={classes.right_side_bar}>
        <div className={classes.home_frangnace_div}>
          <span>Home Fragrance</span>
          <ReactPaginate
            pageCount={5}
            className={classes.pagination}
            pageClassName={classes.pagination_li}
            nextLabel=">>"
            previousLabel={null}
          />
        </div>
        <div className={classes.filter_sort_contaier}>
          <div className={classes.filter_div}></div>
          <div className={classes.sort_div}></div>
        </div>
      </div>
    </div>
  );
};

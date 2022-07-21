import React from "react";
import classes from "./HomeFragnance.module.css";
import ReactPaginate from "react-paginate";
import { SingleItem } from "../../Components/krishan/SingleItem";
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
          <div className={classes.filter_div}>
            <h1 className={classes.filter_h1}>Filter By :</h1>
            <select className={classes.filter_select}>
              <option>Product Type</option>
            </select>
            <select className={classes.filter_select}>
              <option>Fragnance Name</option>
            </select>
            <select className={classes.filter_select}>
              <option>Fragnance Category</option>
            </select>
          </div>
          <div className={classes.sort_div}>
            <select className={classes.sort_select}>
              <option>SORT BY</option>
            </select>
          </div>
        </div>
        <div className={classes.product_container}>
          <SingleItem />
        </div>
      </div>
    </div>
  );
};

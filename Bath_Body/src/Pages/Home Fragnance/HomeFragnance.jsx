import React, { useEffect, useState } from "react";
import classes from "./HomeFragnance.module.css";

import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { SingleItem } from "../../Components/krishan/SingleItem";
import { getData1, getData2 } from "../../Redux/krReducer/action";
export const HomeFragnance = () => {
  const data = useSelector((state) => state.Freducer.Fdata);
  const dispatch = useDispatch();
  useEffect(() => {
    getData1(dispatch);
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.left_side_bar}>
        <div className={classes.top_offer_section}>
          <span className={classes.offer_header}>TOP OFFERS</span>
          <br></br>
          <span className={classes.offer_link_section}>
            5/$25 Wallflowers Fragrance Refills
          </span>
          <br></br>
          <span className={classes.offer_link_section}>3/$22 Room Sprays</span>
          <br></br>
          <span className={classes.offer_link_section}>
            3/$10 Car Fragrance Refills
          </span>
          <br></br>
        </div>
        <div className={classes.top_offer_section}>
          <span className={classes.offer_header}>All Wallflowers</span>
          <br></br>
          <span className={classes.offer_link_section}>Wallflowers Plugs</span>
          <br></br>
          <span className={classes.offer_link_section}>
            Room Sprays & Mists
          </span>
          <br></br>
          <span className={classes.offer_link_section}>Car Fragrance</span>
          <br></br>
        </div>
        <div className={classes.top_offer_section}>
          <span className={classes.offer_header}>FEATURED</span>
          <br></br>
          <span className={classes.offer_link_section}>
            Auto Refresh Wallflowers
          </span>
        </div>
      </div>
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
            <select
              className={classes.sort_select}
              onChange={(e) => getData2(dispatch, e.target.value)}
            >
              <option>SORT BY</option>
              <option value="asc">Price High to low</option>
              <option value="desc">Price Low to high</option>
            </select>
          </div>
        </div>
        <div className={classes.product_container}>
          {data?.map((data) => {
            return <SingleItem key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

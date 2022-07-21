import React, { useEffect, useState } from "react";
import classes from "./HomeFragnance.module.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { SingleItem } from "../../Components/krishan/SingleItem";
export const HomeFragnance = () => {
  const [fragnaceData, setfragnanceData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/newFragrance")
      .then((r) => {
        setfragnanceData(r.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.left_side_bar}>
        <div className={classes.top_offer_section}>
          <span className={classes.offer_header}>TOP OFFERS</span><br></br>
          <span className={classes.offer_link_section}>5/$25 Wallflowers Fragrance Refills</span><br></br>
          <span className={classes.offer_link_section}>3/$22 Room Sprays</span><br></br>
          <span className={classes.offer_link_section}>3/$10 Car Fragrance Refills</span><br></br>
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
            <select className={classes.sort_select}>
              <option>SORT BY</option>
            </select>
          </div>
        </div>
        <div className={classes.product_container}>
          {fragnaceData.map((data) => {
            return <SingleItem key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

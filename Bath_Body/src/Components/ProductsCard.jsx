import React from "react";
import styles from "../css/ProductsCard.module.css";
import pic from "../love_sign.png";
import { Link } from "react-router-dom";

const ProductsCard = ({ id, img, title, name, subname, Price, type }) => {
 

  return (
    <div className={styles.innerDiv}>
      <img className={styles.heart} src={pic} alt="" />
      <Link to={`/products/${id}`}>
        <img className={styles.prodImg} src={img} alt="" />
      </Link>
      <p className={styles.name}>{name}</p>
      <p className={styles.subname}>{subname}</p>
      <p className={styles.price}>${Price}</p>
      <p className={styles.offer}>Mix & Match: Buy 2, Get 2</p>
      <button className={styles.addtocart}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductsCard;
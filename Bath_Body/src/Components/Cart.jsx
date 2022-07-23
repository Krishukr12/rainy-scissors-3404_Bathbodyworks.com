import React from "react";
import styles from "./AddtoCart.module.css";
import AddtoCart from "./AddtoCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/souReducer/action";
import { useEffect } from "react";
import pic from "./img2.png";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../Redux/CartReducer/action";



const Cart = () => {
  let Navigate =useNavigate();
  const gettoCart = useSelector((state) => state.Cartreducer.gettoCart);
  const dispatch = useDispatch();
// console.log(AddtoCart)
  useEffect(() => {
    getCart(dispatch);
  }, [dispatch]);

  return (
    <>
    {
      gettoCart.length === 0 ? (
      <div style={{textAlign:"center",marginBottom:"20px"}} >
      <br/>
      <img className={styles.empCart} src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" />    
      <p>Please Add some Products To Show Here</p>
      </div>
    ):
    (<>
<img className={styles.headerpic} src={pic} alt="" />
      <div className={styles.blue}>
        <p style={{ color: "white" }}>
          Free product to be added in the cart by the customer to avail offer
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div className={styles.cartContainer}>
          {gettoCart.map((e) => (
            <AddtoCart key={e.id} {...e} />
          ))}
        </div>
        <div
          style={{
            border: "0.01px solid lightGrey",
            marginLeft: "30px",
            fontWeight: "lighter",
            marginTop: "30px",
          }}
        ></div>
        <div style={{ textAlign: "left", marginLeft: "15px" }}>
          <p>Apply Coupons</p>
          <div>
            <input
              className={styles.inputcoupon}
              type="text"
              placeholder="Enter Coupon Code"
            />
            <button className={styles.apply}>APPLY</button>
          </div>
          <p style={{ marginTop: "39px" }}>SHIPPING METHOD</p>
          <select name="" className={styles.selectTag}>
            <option value="default">Standard (Estimated Delivery)</option>
            <option value=""> Standard (Estimated Delivery) 5 to 6 pm</option>
          </select>
          <p style={{ marginTop: "39px" }}>ORDER DETAILS</p>
          <p style={{ fontSize: "smaller", color: "grey" }}>
            (Prices are inclusive of all taxes)
          </p>
          <p>Order Summary</p>
          <div style={{ display: "flex" }}>
            <p>Order amount</p>
            <p style={{ marginLeft: "178px" }}></p>
          </div>
          <div style={{ display: "flex" }}>
            <p>Shipping Charges</p>
            <p style={{ marginLeft: "150px" }}>$0</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>Discount</p>
            <p style={{ marginLeft: "215px" }}>$0</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>Total MRP</p>
            <p style={{ marginLeft: "205px" }}></p>
          </div>
          <hr className={styles.orderLine} />
          <div style={{ display: "flex" }}>
            <p style={{fontWeight: "bold",fontSize:"20px"}}>ORDER TOTAL</p>
            <p style={{ marginLeft: "135px",fontWeight: "bold",fontSize:"20px" }}></p>
          </div>
          <Link to="/cart/checkout">
          <button onClick={()=>Navigate("/cart/checkout")} className={styles.checkOut}>CONTINUE CHECKOUT</button>
          </Link>
        </div>
      </div>
      </>
    )
  
    }
      
    </>
  );
};

export default Cart;

import React from 'react';
import classes from '../../Pages/Home Fragnance/HomeFragnance.module.css'
const Leftco = () => {
  return (
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
  )
}

export default Leftco

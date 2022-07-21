import React from 'react'
import styles from "./Customtabs.module.css"

const Customtabs = () => {
  return (
    <div className={styles.Custom_tabs_main}>
      <div className={styles.Custom_tabs}>
        <button className={styles.Custom_tabs_image_parent}><img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc05235a2/images/BagHead.svg" alt=""/></button>
        
      </div>
      <div className={styles.dots_parent}>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
      </div>
      <div className={styles.Custom_tabs}>
        <button className={styles.Custom_tabs_image_parent}> <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw99f1e024/images/addressStepper.svg  " alt=""/></button>
        
      </div>
      <div className={styles.dots_parent}>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
      </div>
      <div className={styles.Custom_tabs}>
        <button className={styles.Custom_tabs_image_parent}> <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwc8dcfc5c/images/Wallet.svg" alt=""/>  </button>
         
      </div>

    </div>
  )
}

export default Customtabs

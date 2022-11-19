import React from "react";
import styles from "./CardMyProduct.module.css";

import sample from "../../asset/product/yellow-chair.png";

function CardMyProduct() {
  return (
    <>
      <div className={`col-4 ${styles["image-title"]}`}>
        <div className={styles["image"]}>
          <img src={sample} alt="" />
        </div>
        <div className={styles["title"]}>
          <p>Eugene Accent Table 18.9 inches Espresso</p>
        </div>
      </div>
      <div className={`col-3 ${styles["stock-status"]}`}>
        <p>
          <span>
            <i className="fa-regular fa-circle-check"></i>
          </span>
          {""}10 Stock
        </p>
      </div>
      <div className={`col-2 ${styles["price"]}`}>
        <p>700.000</p>
      </div>
      <div className={`col-2 ${styles["del-btn"]}`}>
        <button>Delete</button>
      </div>
    </>
  );
}

export default CardMyProduct;

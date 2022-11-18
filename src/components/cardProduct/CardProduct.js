import React from "react";
import styles from "./CardProduct.module.css";

import sample from "../../asset/product/yellow-chair.png";

function CardProduct() {
  return (
    <div className={styles["card-product"]}>
      <div className={styles["image"]}>
        <img src={sample} alt="" />
      </div>
      <div className={styles["name"]}>
        <h1>Coaster 506222-CO Loveseat</h1>
      </div>
      <div className={styles["price"]}>
        <p>$765.99</p>
      </div>
    </div>
  );
}

export default CardProduct;

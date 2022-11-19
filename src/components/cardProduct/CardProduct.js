import React from "react";
import styles from "./CardProduct.module.css";

// import sample from "../../asset/product/yellow-chair.png";

function CardProduct(props) {
  return (
    <div className={styles["card-product"]}>
      <div className={styles["image"]}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles["name"]}>
        <h1>{props.productName}</h1>
      </div>
      <div className={styles["price"]}>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default CardProduct;

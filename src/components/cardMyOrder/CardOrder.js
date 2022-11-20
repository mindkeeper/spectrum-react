import React from "react";
import styles from "./CardOrder.module.css";
import sample from "../../asset/product/grey-chair.png";

function CardOrder() {
  return (
    <>
      <div className={`col-5 ${styles["image-title"]}`}>
        <div className={styles["image"]}>
          <img src={sample} alt="" />
        </div>
        <div className={styles["title"]}>
          <p>Fabric Mid Century Chair</p>
        </div>
      </div>
      <div className={`col-1 ${styles["price"]}`}>
        <p>700.000</p>
      </div>
      <div className={`col-1 ${styles["qty"]}`}>
        <p>01</p>
      </div>
      <div className={`col-2 ${styles["stock-status"]}`}>
        <p>
          <span>
            <i className="fa-regular fa-circle-check"></i>
          </span>
          {""}Sent
        </p>
      </div>
      <div className={`col-2 ${styles["price"]}`}>
        <p>700.000</p>
      </div>
    </>
  );
}

export default CardOrder;

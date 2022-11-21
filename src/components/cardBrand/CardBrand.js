import React from "react";
import styles from "./CardBrand.module.css";

function CardBrand({ name, id }) {
  return (
    <>
      <div className={styles["checkbox"]}>
        <input type="radio" name="brands" id={id} />
        <label htmlFor="">{name}</label>
      </div>
    </>
  );
}

export default CardBrand;

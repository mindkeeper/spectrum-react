import React from "react";
import styles from "./CardBrand.module.css";

function CardBrand({ name, setQuery, id }) {
  return (
    <>
      <div className={styles["checkbox"]}>
        <input
          type="radio"
          name="brands"
          id={id}
          onClick={() => setQuery({ brandId: id })}
        />
        <label htmlFor="">{name}</label>
      </div>
    </>
  );
}

export default CardBrand;

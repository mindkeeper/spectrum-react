import React from "react";
import styles from "./CardCategory.module.css";

function CardCategory({ name, unit }) {
  return (
    <>
      <div className={styles["content"]}>
        <div className={styles["name"]}>
          <p>{name}</p>
        </div>
        <div className={styles["qty"]}>
          <p>{unit}</p>
        </div>
      </div>
    </>
  );
}

export default CardCategory;

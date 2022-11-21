import React from "react";
import styles from "./CardCategory.module.css";

function CardCategory({ name, unit, setQuery, id }) {
  return (
    <>
      <div className={styles["content"]}>
        <div
          className={styles["name"]}
          onClick={() => setQuery({ categoryId: id })}
        >
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

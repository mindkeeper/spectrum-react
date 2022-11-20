import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className="mx-auto my-5">
      <div className={styles["lds-grid"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;

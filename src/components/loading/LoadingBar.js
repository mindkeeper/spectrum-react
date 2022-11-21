import React from "react";
import style from "./LoadingBar.module.css";

function LoadingBar() {
  return (
    <>
      <div className={style["lds-facebook"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default LoadingBar;

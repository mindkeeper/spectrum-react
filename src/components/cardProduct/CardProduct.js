import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CardProduct.module.css";

// import sample from "../../asset/product/yellow-chair.png";

function CardProduct(props) {
  const navigate = useNavigate();

  // const toDetail = navigate(`/product/detail/${props.id}`);

  return (
    <div className={styles["card-product"]}>
      <div className={styles["image"]}>
        <img
          src={props.image}
          alt=""
          onClick={() => navigate(`/product/detail/${props.id}`)}
        />
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

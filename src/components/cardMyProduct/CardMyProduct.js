import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import productActions from "../../redux/actions/product";
import styles from "./CardMyProduct.module.css";

// import sample from "../../asset/product/yellow-chair.png";

function CardMyProduct({ image, name, stock, price }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const deleteHandler = () => {
    dispatch(productActions.delProductThunk(`/products/delete/${id}`));
  };

  return (
    <>
      <div className={`col-lg-4 col-md-4 col-4 ${styles["image-title"]}`}>
        <div className={styles["image"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles["title"]}>
          <p>{name}</p>
        </div>
      </div>
      <div className={`col-lg-3 col-md-3 col-2 ${styles["stock-status"]}`}>
        <p>
          <span>
            <i className="fa-regular fa-circle-check"></i>
          </span>
          {""}
          {stock}
        </p>
      </div>
      <div className={`col-lg-2 col-md-2 col-3 ${styles["price"]}`}>
        <p>{price}</p>
      </div>
      <div className={`col-lg-2 col-md-2 col-2 ${styles["del-btn"]}`}>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </>
  );
}

export default CardMyProduct;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CardMyProduct.module.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productActions from "../../redux/actions/product";
import { currencyFormatter } from "../../helper/currencyFormatter";
// import sample from "../../asset/product/yellow-chair.png";

function CardMyProduct({ image, name, stock, price, id }) {
  const token = useSelector((state) => state.auth.userInfo.token);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => setOpenModal((openModal) => !openModal);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    const success = () => {
      toast.success("Delete Product Success");
      handleModal();
    };
    const failed = (error) => toast.failed(error);
    dispatch(productActions.deleteProductThunk(id, token, success, failed));
    dispatch(productActions.getProductSellerThunk(token));
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
        <p>{currencyFormatter(price)}</p>
      </div>
      <div className={`col-lg-2 col-md-2 col-2 ${styles["del-btn"]}`}>
        <button onClick={handleModal}>Delete</button>
      </div>
      <Modal show={openModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Spectrum</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete this item?</Modal.Body>
        <Modal.Footer>
          <Button className={styles["yes-btn"]} onClick={handleDelete}>
            Yes
          </Button>
          <Button className={styles["close-btn"]} onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardMyProduct;

import React from "react";
import { currencyFormatter } from "../../helper/currencyFormatter";
import css from "./CardCartDetail.module.css";
import { useDispatch } from "react-redux";
import transactionActions from "../../redux/actions/transactions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CardCartDetail({ id, price, image, qty, subtotal, productName }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(transactionActions.updateCartItem(id, qty + 1));
  };

  const handleDeleteItem = () => {
    dispatch(transactionActions.deleteItem(id));
    toast.success(`${productName} deleted from cart`);
  };
  const handleReduce = () =>
    qty > 0 && dispatch(transactionActions.updateCartItem(id, qty - 1));
  return (
    <>
      <div className={css.product_cart}>
        <i
          className={`fa-regular fa-circle-xmark ${css.silang}`}
          onClick={handleDeleteItem}
        ></i>
        <img src={image} alt="Image_Product" className={css.image_preview} />
        <p className={css.name_product}>{productName}</p>
        <p className={css.price_product}>{currencyFormatter(price)}</p>
        {/* button + or - product */}
        <div className={` ${css["add-product"]}`}>
          <button onClick={handleReduce}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <input type="text" value={qty} />
          <button onClick={handleAdd}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <p className={css.price_product1}>{currencyFormatter(subtotal)}</p>
      </div>
    </>
  );
}

export default CardCartDetail;

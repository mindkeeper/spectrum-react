import React, { useState } from "react";

import css from "./CartCheckout.module.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import transactionActions from "../../../redux/actions/transactions";

function CartDetail() {
  const [data, setData] = useState({});
  const token = useSelector((state) => state.auth.userInfo.token);
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const transData = useSelector((state) => state.transactions.transData);
  const dispatch = useDispatch();

  const handleTrans = () => {
    const body = { ...transData, ...data };
    console.log(body);
    const success = () => {
      dispatch(transactionActions.cartReset());
      return toast.success("Transaction created");
    };
    const error = () => toast.error("Transaction error");
    dispatch(transactionActions.createTransThunk(body, token, success, error));
  };
  return (
    <>
      <Header />

      {/* Title Bar Cart */}
      <div className={`container-fluid ${css["blog-top"]}`}>
        <div className={`container ${css["link-bar"]}`}>
          <p>
            Cart <i className="fa-solid fa-angle-right"></i>
          </p>
          <p>Checkout</p>
        </div>
        <div className={`${css["our-blog"]}`}>
          <p className={`${css["our-blog-1"]}`}>Check Out</p>
          <p className={`${css["our-blog-2"]}`}>
            Pay and get your ordered items
          </p>
        </div>
      </div>

      <div className={`container ${css.container_box}`}>
        <div className={css.self_info}>
          <p>Self Information</p>
        </div>
        <div className={css.box_check}>
          <p>Your Name </p>
          <input
            type="text"
            name="receiver_name"
            id=""
            onChange={changeHandler}
          />
        </div>
        <div className={css.box_check1}>
          <p>Address </p>
          <input type="text" name="address" id="" onChange={changeHandler} />
        </div>
        <div className={css.box_check2}>
          <p>
            {" "}
            +62 <i className="fa-solid fa-caret-down"></i>
          </p>
          <input type="text" name="phone" id="" onChange={changeHandler} />
        </div>
        <div className={css.box_check3}>
          <i className="fa-brands fa-cc-visa"></i>
          <select name="payment_id" id="" onChange={changeHandler}>
            <option selected>Pay with Visa</option>
            <option value="1">BCA</option>
            <option value="2">BNI</option>
            <option value="3">BRI</option>
            <option value="4">MANDIRI</option>
          </select>
        </div>
        <div className={css.Check_out}>
          <button onClick={handleTrans}>Check Out</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CartDetail;

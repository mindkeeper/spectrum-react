import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../../../helper/currencyFormatter";
import css from "./CartDetail.module.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Card from "../../../components/cardCartDetail/CardCartDetail";
import CartEmpty from "../../../components/cardCartEmpty/CardEmpty";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import transactionActions from "../../../redux/actions/transactions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartDetail() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.transactions.cart);
  const toCheckout = () => {
    handleCheckout();
    navigate("checkout");
  };
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.subtotal, 0);
  const transformCart = (cart) => {
    return cart.reduce((acc, curr) => {
      const foundProduct = acc.find(
        (item) => item.productId === curr.productId
      );
      if (foundProduct) {
        foundProduct.qty++;
      } else {
        acc.push({ productId: curr.productId, qty: 1 });
      }
      return acc;
    }, []);
  };

  const handleCheckout = () => {
    const data = {
      productList: transformCart(cartItems),
      promo_id: 1,
      shipment_id: 1,
      status_id: 1,
      subtotal,
      total: subtotal + subtotal * 0.1,
    };
    dispatch(transactionActions.transactionData(data));
  };
  const modalShow = () => setShow(true);
  const modalClose = () => setShow(false);
  const handleClearCart = () => {
    dispatch(transactionActions.cartReset());
    toast.success("Your cart is cleared");
    modalClose();
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
          <p></p>
        </div>
        <div className={`${css["our-blog"]}`}>
          <p className={`${css["our-blog-1"]}`}>Your Cart</p>
          <p className={`${css["our-blog-2"]}`}>
            Buy everything in your cart now!
          </p>
        </div>
      </div>

      <div className={`container ${css.container_box}`}>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            {cartItems.length <= 0 ? null : (<div className={css.content_bar}>
              <p className={css.content_bar1}>Product</p>
              <p className={css.content_bar2}>Price</p>
              <p className={css.content_bar3}>Quantity</p>
              <p className={css.content_bar4}>Total</p>
            </div>)}
            {cartItems.length <= 0 ? (
              <CartEmpty />
            ) : (
              cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => {
                return (
                  <Card
                    key={item.productId}
                    image={item.images}
                    qty={item.qty}
                    id={item.productId}
                    price={item.price}
                    subtotal={item.subtotal}
                    productName={item.productName}
                  />
                );
              })
            )}
            {cartItems.length <= 0 ? null : (<>
              <hr />
            <div className={`container ${css["bar-coupon"]}`}>
              <div className={css.input_coupon}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Input Your Coupon"
                />
                <label htmlFor="">Apply Coupon</label>
              </div>
              <div className={css.coupon_button}>
                <div className={css.coupon_button1} onClick={modalShow}>
                  Clear Cart
                </div>
                <p className={css.coupon_button2}>Update Cart</p>
              </div>
            </div></>)}
          </div>
          {cartItems.length > 0 && (
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className={css.bg_style}>
                <p>Cart Total</p>
                <div className={css.total}>
                  <p>Sub Total</p>
                  <p>Rp. {currencyFormatter(subtotal)}</p>
                </div>
                <div className={css.shipping}>
                  <div className={css.shipping_text}>
                    <p>Shipping</p>
                  </div>
                  <div className={css.radio_check}>
                    <div className={css.styling_radio1}>
                      <input type="radio" name="" id="" />
                      <label htmlFor="">Flat Rate</label>
                    </div>
                    <div className={css.styling_radio2}>
                      <input type="radio" name="" id="" />
                      <label htmlFor="">Free shipping</label>
                    </div>
                    <div className={css.styling_radio3}>
                      <input type="radio" name="" id="" />
                      <label htmlFor="">Local Pick Up</label>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={css.total1}>
                  <p>Total Price</p>
                  <p>Rp. {currencyFormatter(subtotal + subtotal * 0.1)}</p>
                </div>
              </div>
              <div className="">
                <button className={css.proccess} onClick={toCheckout}>
                  Procced To Check Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <Modal show={show} onHide={modalClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>are you sure you want to delete this product ?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            className="fw-bold text-bg-dark text-white"
            onClick={handleClearCart}
          >
            Yes
          </Button>
          <Button
            variant="dark"
            className="fw-bold text-bg-light text-dark"
            onClick={modalClose}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartDetail;

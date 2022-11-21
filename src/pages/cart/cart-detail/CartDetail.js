import React from 'react'
import { useNavigate } from 'react-router-dom'

import css from './CartDetail.module.css'
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import CartDetailProduct from "../../../components/cardCartDetail/CardCartDetail"
import CartEmpty from "../../../components/cardCartEmpty/CardEmpty"
import tittle from "../../../components/tittle/Tittle"



function CartDetail() {
    const navigate = useNavigate()

    const toCheckout = () => navigate("checkout")

    tittle("Spectrum | Cart Detail")
    return (
        <>
            <Header />

            {/* Title Bar Cart */}
            <div className={`container-fluid ${css['blog-top']}`}>
                <div className={`container ${css['link-bar']}`}>
                    <p>Cart <i className="fa-solid fa-angle-right"></i></p>
                    <p></p>
                </div>
                <div className={`${css['our-blog']}`}>
                    <p className={`${css['our-blog-1']}`}>Your Cart</p>
                    <p className={`${css['our-blog-2']}`}>Buy everything in your cart now!</p>
                </div>
            </div>


            <div className={`container ${css.container_box}`}>
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className={css.content_bar}>
                            <p className={css.content_bar1}>Product</p>
                            <p className={css.content_bar2}>Price</p>
                            <p className={css.content_bar3}>Quantity</p>
                            <p className={css.content_bar4}>Total</p>
                        </div>
                        {/* detail */}
                        <CartDetailProduct />
                        <CartDetailProduct />
                        {/* <CartEmpty />  Cart kalo productnya gk ada tinggal di kasih Conditional renderin*/}

                        <hr />
                        <div className={`container ${css['bar-coupon']}`}>
                            <div className={css.input_coupon}>
                                <input type="text" name="" id="" placeholder="Input Your Coupon" />
                                <label htmlFor="">Apply Coupon</label>
                            </div>
                            <div className={css.coupon_button}>
                                <p className={css.coupon_button1}>Clear Cart</p>
                                <p className={css.coupon_button2}>Update Cart</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className={css.bg_style}>
                            <p>Cart Total</p>
                            <div className={css.total}>
                                <p>Sub Total</p>
                                <p>$125</p>
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
                                <p>$125</p>
                            </div>
                        </div>
                        <div className="">
                            <button className={css.proccess} onClick={toCheckout}>Procced To Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CartDetail
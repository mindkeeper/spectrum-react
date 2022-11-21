import React from 'react'

import css from './CartCheckout.module.css'
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"

function CartDetail() {
    return (
        <>
            <Header />

            {/* Title Bar Cart */}
            <div className={`container-fluid ${css['blog-top']}`}>
                <div className={`container ${css['link-bar']}`}>
                    <p>Cart <i className="fa-solid fa-angle-right"></i></p>
                    <p>Checkout</p>
                </div>
                <div className={`${css['our-blog']}`}>
                    <p className={`${css['our-blog-1']}`}>Check Out</p>
                    <p className={`${css['our-blog-2']}`}>Pay and get your ordered items</p>
                </div>
            </div>


            <div className={`container ${css.container_box}`}>
                <div className={css.self_info}>
                    <p>Self Information</p>
                </div>
                <div className={css.box_check}>
                    <p>Your Name </p>
                    <input type="text" name="" id="" />
                </div>
                <div className={css.box_check1}>
                    <p>Address </p>
                    <input type="text" name="" id="" />
                </div>
                <div className={css.box_check2}>
                    <p> +62 <i className="fa-solid fa-caret-down"></i></p>
                    <input type="text" name="" id="" />
                </div>
                <div className={css.box_check3}>
                    <i className="fa-brands fa-cc-visa"></i>
                    <select name="" id="" >
                        <option selected>Pay with Visa</option>
                        <option value="BCA">BCA</option>
                        <option value="BNI">BNI</option>
                        <option value="BRI">BRI</option>
                        <option value="MANDIRI">MANDIRI</option>
                    </select>
                </div>
                <div className={css.Check_out}>
                    <button>Check Out</button>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CartDetail
import React from 'react'
import { Link } from "react-router-dom";

import styles from './CartDetail.module.css'
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"

import img_chair from '../../../asset/cart/img_chair.png'

function CartDetail() {
    return (
        <>
            <Header />
            <main>
                {/* breadcrumb */}
                <section className={styles.breadcrumb__bar}>
                    <nav className={`${styles.breadcrumb}`}>
                        <Link to={"#"}>Your Cart</Link>
                        <i className="bi bi-chevron-right ms-3"></i>
                    </nav>
                    <div className="text-center">
                        <h1 className="py-3">Your Cart</h1>
                        <p>Buy everything in your cart now!</p>
                    </div>
                </section>
                {/* cart */}
                <section className="row container py-5 mx-auto d-flex flex-lg-row justify-content-between flex-md-column">
                    {/* card cart */}
                    <section
                        className={`${styles.cart_product} col-12 col-sm-12 col-md-12 col-lg-8`}
                    >
                        <table
                            className={`${styles.tables_cart} table table-borderless w-100`}
                        >
                            <thead>
                                <tr className=" d-flex justify-content-between ">
                                    <th
                                        className={`${styles.title_table} w-50`}
                                        scope="col"
                                    >
                                        Products
                                    </th>
                                    <div className="d-flex justify-content-between w-50">
                                        <th
                                            className={`${styles.title_table} `}
                                            scope="col"
                                        >
                                            PRICE
                                        </th>
                                        <th
                                            className={`${styles.title_table} `}
                                            scope="col"
                                        >
                                            QUANTITY
                                        </th>
                                        <th
                                            className={`${styles.title_table} `}
                                            scope="col"
                                        >
                                            TOTAL
                                        </th>
                                    </div>
                                </tr>
                            </thead>
                            <tbody className={`${styles.product__bar}`}>
                                {/* card 1 */}
                                <tr className={styles.product}>
                                    <td className="w-50">
                                        <span className="d-flex justify-content-start align-items-center">
                                            <span className={styles.delete}>
                                                <i className="bi bi-x fs-3 pe-3"></i>
                                            </span>
                                            <img
                                                className={`${styles.img_product}`}
                                                src={img_chair}
                                                alt="img_chair"
                                            />
                                            <span className="ms-0 ms-sm-0 ms-md-5 ms-lg-5">
                                                Fabric Mid Century Chair
                                            </span>
                                        </span>
                                    </td>
                                    <div className="w-50 d-flex justify-content-between align-items-center">
                                        <td className="text-center">$10.50</td>
                                        <td className="text-center">
                                            <span className="d-flex justify-content-center align-items-center">
                                                <span className={styles.btn__qty}>-</span>
                                                <span>
                                                    <input
                                                        className={styles.input__qty}
                                                        type="number"
                                                        value={"02"}
                                                    />
                                                </span>
                                                <span className={styles.btn__qty}>+</span>
                                            </span>
                                        </td>
                                        <td className="text-center fw-bold">$21.00</td>
                                    </div>
                                </tr>
                                {/* card 2 */}
                                <tr className={styles.product}>
                                    <td className="w-50">
                                        <span className="d-flex justify-content-start align-items-center">
                                            <span className={styles.delete}>
                                                <i className="bi bi-x fs-3 pe-3"></i>
                                            </span>
                                            <img
                                                className={`${styles.img_product}`}
                                                src={img_chair}
                                                alt="img_chair"
                                            />
                                            <span className="ms-0 ms-sm-0 ms-md-5 ms-lg-5">
                                                Fabric Mid Century Chair
                                            </span>
                                        </span>
                                    </td>
                                    <div className="w-50 d-flex justify-content-between align-items-center">
                                        <td className="text-center">$10.50</td>
                                        <td className="text-center">
                                            <span className="d-flex justify-content-center align-items-center">
                                                <span className={styles.btn__qty}>-</span>
                                                <span>
                                                    <input
                                                        className={styles.input__qty}
                                                        type="number"
                                                        value={"02"}
                                                    />
                                                </span>
                                                <span className={styles.btn__qty}>+</span>
                                            </span>
                                        </td>
                                        <td className="text-center fw-bold">$21.00</td>
                                    </div>
                                </tr>
                            </tbody>
                            {/* coupun */}
                            <section className={`${styles.coupon} row d-flex `}>
                                <section
                                    className={`${styles.input__bar} col-12 col-sm-12 col-md-7`}
                                >
                                    <span className={`${styles.input_code}`}>
                                        <input
                                            type="text"
                                            placeholder="Enter your coupon code"
                                        />
                                        Apply Coupon
                                    </span>
                                </section>
                                <section className="col-12 col-sm-12 col-md-5 d-flex justify-content-end">
                                    <span className={styles.btn_}>Clear Cart</span>
                                    <span
                                        className={`${styles.btn_} fw-bold text-black`}
                                    >
                                        Update Cart
                                    </span>
                                </section>
                            </section>
                        </table>
                    </section>
                    {/* cart total */}
                    <section
                        className={`${styles.cart_total} col-12 col-sm-12 col-md-12 col-lg-4 `}
                    >
                        <div className={`${styles.total_bar}`}>
                            <p className={`${styles.title} pb-5`}>Cart Total</p>
                            <section className="d-flex justify-content-between align-items-center pb-5">
                                <p className={`${styles.title} `}>Subtotal</p>
                                <p className={`${styles.title}`}>$125</p>
                            </section>
                            <section
                                className={`${styles.shipping} d-flex justify-content-between align-content-start`}
                            >
                                <p className={`${styles.title}`}>Shipping</p>
                                <section>
                                    <section>
                                        <input
                                            type="radio"
                                            id="flat"
                                            name="shipping"
                                            className={`${styles.input_radio} me-3`}
                                        />
                                        <label htmlFor="flat">Flat rate: $10</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            id="free"
                                            name="shipping"
                                            className={`${styles.input_radio} me-3`}
                                        />
                                        <label htmlFor="free">Free shipping</label>
                                    </section>
                                    <section>
                                        <input
                                            type="radio"
                                            id="pickup"
                                            name="shipping"
                                            className={`${styles.input_radio} me-3`}
                                        />
                                        <label htmlFor="pickup">Local pickup</label>
                                    </section>
                                </section>
                            </section>
                            <section className="d-flex justify-content-between align-content-center py-3">
                                <p className={`${styles.title}`}>Total Price</p>
                                <p className={`${styles.title}`}>$125</p>
                            </section>
                        </div>
                        <button className={`${styles.btn_process}`}>
                            Procced To Check Out
                        </button>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default CartDetail
import React, { useState } from "react";
import styles from "./Order.module.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Tab from "../../../components/card-header-profile/CardHeaderProfile";
import Card from "../../../components/cardMyOrder/CardOrder";

function Order() {
  const [dropdown, setDropdown] = useState(false);
  const active = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <main className={`col-lg-12 ${styles["page-title"]}`}>
            <h1>My Account</h1>
            <p>
              Register and log in with your account to be able to shop at will
            </p>
          </main>
        </div>
      </div>
      <Tab order={active} />
      {dropdown && (
        <div className={styles["dropdown"]}>
          <ol>
            <li>All</li>
            <li>Get Paid</li>
            <li>Processed</li>
            <li>Sent</li>
            <li>Completed</li>
            <li>Order Cancel</li>
          </ol>
        </div>
      )}
      <div className="container">
        <div className={`row ${styles["order-tab"]}`}>
          <div className="col-5">
            <h1>PRODUCTS</h1>
          </div>
          <div className="col-1">
            <h1>PRICE</h1>
          </div>
          <div className="col-1">
            <h1>QUANTITY</h1>
          </div>
          <div className="col-2">
            <h1>STATUS ORDER</h1>
          </div>
          <div className="col-2">
            <h1>TOTAL</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`row ${styles["product-content"]}`}>
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Order;

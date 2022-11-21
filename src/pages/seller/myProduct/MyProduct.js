import React, { useState } from "react";
import styles from "./MyProduct.module.css";
import Header from "../../../components/header/Header";
import Tab from "../../../components/card-header-profile/CardHeaderProfile";
import Footer from "../../../components/footer/Footer";
import Card from "../../../components/cardMyProduct/CardMyProduct";
import tittle from "../../../components/tittle/Tittle"

function MyProduct() {
  const [dropdown, setDropdown] = useState(false);
  const active = () => {
    setDropdown(!dropdown);
  };


  tittle("Spectrum | My Product")
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
      <Tab show={active} />
      {dropdown && (
        <div className={styles["dropdown"]}>
          <ol>
            <li>All</li>
            <li>Archieve</li>
            <li>Sold Out</li>
          </ol>
        </div>
      )}

      <div className="container">
        <div className={`row ${styles["product-tab"]}`}>
          <div className="col-4">
            <h1>Product</h1>
          </div>
          <div className="col-3">
            <h1>Stock Status</h1>
          </div>
          <div className="col-2">
            <h1>Price</h1>
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

export default MyProduct;

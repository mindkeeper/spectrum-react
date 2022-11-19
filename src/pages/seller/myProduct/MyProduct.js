import React from "react";
import styles from "./MyProduct.module.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";

function MyProduct() {
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
      <Footer />
    </>
  );
}

export default MyProduct;

import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Product.module.css";

import Card from "../../components/cardProduct/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product";

function Product() {
  const [show, setShow] = useState(false);
  const products = useSelector((state) => state.products.products);
  const dispacth = useDispatch();
  const dropdownHandler = () => {
    setShow(!show);
  };

  console.log(products);

  useEffect(() => {
    dispacth(productActions.getProductThunk());
  }, [dispacth]);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className={`row ${styles["page-title"]}`}>
          <div className="container">
            <div className="col-12">
              <div className={styles["side-page"]}>
                <p>
                  Shop <span>&#62;</span> Shop Right Sidebar
                </p>
              </div>
            </div>
            <div className={`col-lg-12 text-center`}>
              <h1>My Account</h1>
              <p>
                Register and log in with your account to be able to shop at will
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`row ${styles["main-content"]}`}>
          <div className="col-lg-3 col-md-3 col-5">
            <div className={styles["left-content"]}>
              <div className={styles["product-categories"]}>
                <div className={styles["title"]}>
                  <h1>Categories</h1>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["name"]}>
                    <p>Furniture</p>
                    <p>Furniture</p>
                    <p>Furniture</p>
                    <p>Furniture</p>
                    <p>Furniture</p>
                    <p>Furniture</p>
                    <p>Furniture</p>
                    <p>Furniture</p>
                    <p>Furniture</p>
                  </div>
                  <div className={styles["qty"]}>
                    <p>15</p>
                    <p>15</p>
                    <p>15</p>
                    <p>15</p>
                    <p>15</p>
                    <p>15</p>
                    <p>15</p>
                    <p>15</p>
                    <p>15</p>
                  </div>
                </div>
              </div>
              <div className={styles["product-price"]}>
                <div className={styles["title"]}>
                  <h1>Price</h1>
                </div>
                <div className={styles["content"]}>
                  <p>Price $39 - $159</p>
                </div>
                <div className={styles["bar"]}>
                  <span className={styles["left-circle"]}></span>
                  <span className={styles["line"]}></span>
                  <span className={styles["right-circle"]}></span>
                </div>
              </div>
              <div className={styles["filter"]}>
                <div className={styles["filter-container"]}>
                  <p>FILTER</p>
                </div>
              </div>
              <div className={styles["product-brands"]}>
                <div className={styles["title"]}>
                  <h1>Brands</h1>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["checkbox"]}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">IKEA</label>
                  </div>
                  <div className={styles["checkbox"]}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Mr Royal</label>
                  </div>
                  <div className={styles["checkbox"]}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Sweet House</label>
                  </div>
                  <div className={styles["checkbox"]}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">North Oxford</label>
                  </div>
                  <div className={styles["checkbox"]}>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Mr.Poppin 1929</label>
                  </div>
                </div>
              </div>
              <div className={styles["product-colors"]}>
                <div className={styles["title"]}>
                  <h1>Colors</h1>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["pallete"]}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-7">
            <div className={styles["right-content"]}>
              <div className={styles["right-tab"]}>
                <div className={styles["paginate-title"]}>
                  <p>Showing 1-16 of 39 Results</p>
                </div>
                <div className={styles["sort-dropdown"]}>
                  <p onClick={dropdownHandler}>
                    Sort by <span>&#9661;</span>
                  </p>
                </div>
              </div>
              {show && (
                <div className={styles["dropdown-list"]}>
                  <ol>
                    <li>latest</li>
                    <li>newest</li>
                    <li>priciest</li>
                    <li>cheapest</li>
                  </ol>
                </div>
              )}
              <div className={styles["card-container"]}>
                {products?.map((e) => (
                  <Card
                    productName={e.product_name}
                    price={e.price}
                    image={e.image}
                    id={e.id}
                    key={e.id}
                  />
                ))}
              </div>
              <div className={styles["paginate-page"]}>
                <div className={styles["page-container"]}>
                  <p>01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

import React, { useState } from "react";
import styles from "../header/Header.module.css";
import logo from "../../asset/logo/logo-black.png";
import glass from "../../asset/product/glass.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/actions/auths";

function Header() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [pages, setPages] = useState(false);
  const [shop, setShop] = useState(false);
  const token = useSelector((state) => state.auth.userInfo.token);
  // console.log(token);

  const toLogin = () => navigate("/login");
  const toProfileCustomer = () => navigate("/profile/customer")
  const logoutHandler = () => {
    dispacth(authActions.logoutThunk(token, toLogin));
  };

  const showHamburger = () => {
    setToggle(!toggle);
  };

  const showPages = () => {
    setPages(!pages);
  };

  const showShop = () => {
    setShop(!shop);
  };

  return (
    <>
      <header className={`container-fluid `}>
        <div className={`row ${styles["navbar"]}`}>
          <div className="col-lg-3 col-6">
            <div className={styles["logo-content"]}>
              <div className={styles["logo"]}>
                <img src={logo} alt="" />
              </div>
              <div className={styles["logo-title"]}>
                <h1>SPECTRUM</h1>
              </div>
            </div>
          </div>
          <div className={`col-6 ${styles["right-responsive"]}`}>
            <div className={styles["right-content"]}>
              <div className={styles["icon"]}>
                <div className={styles["search"]}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={styles["love"]}>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className={styles["shop"]}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
              <div className={styles["menu-toggle"]} onClick={showHamburger}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={styles["menu-bar"]}>
              <ol>
                <li>HOME</li>
                <li onClick={showPages}>PAGES</li>
                <li onClick={showShop}>SHOP</li>
                <li>BLOG</li>
              </ol>
            </div>
          </div>
          <div className={`col-lg-3 `}>
            <div className={styles["right-content"]}>
              <div className={`${styles["icon"]} ${styles["right-none"]}`}>
                <div className={styles["search"]}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={styles["love"]}>
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className={styles["shop"]}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
              <div
                className={`${styles["menu-toggle"]} ${styles["right-none"]}`}
                onClick={showHamburger}
              >
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
              {toggle && (
                <div className={styles["hamburger-list"]}>
                  <ol className={styles["show"]}>
                    <li onClick={toProfileCustomer}>Profile</li>
                    <li>Chat</li>
                    <li>Notification</li>
                    <li onClick={logoutHandler}>Logout</li>
                  </ol>
                </div>
              )}
              {pages && (
                <div className={styles["pages-list"]}>
                  <ol className={styles["show"]}>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Coming Soon</li>
                    <li>404 Page</li>
                    <li>FAQ Page</li>
                  </ol>
                </div>
              )}
              {shop && (
                <div className={styles["shop-list"]}>
                  <ol className={styles["show"]}>
                    <li>Other Page</li>
                    <li>Shopping Cart</li>
                    <li>Check Out</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                  </ol>
                  <div className={styles["promo"]}>
                    <div className={styles["img"]}>
                      <img src={glass} alt="glass" />
                    </div>
                    <div className={styles["promo-detail"]}>
                      <div className={styles["promo-title"]}>
                        <h1>Decorative Ceramic Accent Vases</h1>
                      </div>
                      <div className={styles["promo-discount"]}>
                        <h2>Off 50%</h2>
                      </div>
                      <div className={styles["btn-shop"]}>
                        <button>Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

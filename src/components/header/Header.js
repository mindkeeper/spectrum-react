import React, { useState } from "react";
import styles from "../header/Header.module.css";
import logo from "../../asset/logo/logo-black.png";
import glass from "../../asset/product/glass.png";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [pages, setPages] = useState(false);
  const [shop, setShop] = useState(false);

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
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={styles["love"]}>
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div className={styles["shop"]}>
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
              <div className={styles["menu-toggle"]}>
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
                <li onClick={showPages}>
                  PAGES <span>&gt;</span>
                </li>
                <li onClick={showShop}>
                  SHOP <span>&gt;</span>
                </li>
                <li>BLOG</li>
              </ol>
            </div>
          </div>
          <div className={`col-lg-3 ${styles["right-none"]}`}>
            <div className={styles["right-content"]}>
              <div className={styles["icon"]}>
                <div className={styles["search"]}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={styles["love"]}>
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div className={styles["shop"]}>
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
              <div className={styles["menu-toggle"]} onClick={showHamburger}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
              {toggle && (
                <div className={styles["hamburger-list"]}>
                  <ol className={styles["show"]}>
                    <li>Profile</li>
                    <li>Chat</li>
                    <li>Notification</li>
                    <li>Logout</li>
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

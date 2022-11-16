import React from "react";
import styles from "../header/Header.module.css";
import logo from "../../asset/logo/logo-black.png";

function Header() {
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
                <li>PAGE</li>
                <li>SHOP</li>
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
              <div className={styles["menu-toggle"]}>
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import React, { useState } from "react";
import styles from "../header/Header.module.css";
import logo from "../../asset/logo/logo-black.png";
import glass from "../../asset/product/glass.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/actions/auths";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [pages, setPages] = useState(false);
  const [shop, setShop] = useState(false);
  const [search, setSearch] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const token = useSelector((state) => state.auth.userInfo.token);
  const roles = useSelector((state) => state.auth.userInfo.roles);
  // console.log(roles);

  const toProfile = () => {
    if (roles === 1) return navigate("/profile/customer");
    if (roles === 2) return navigate("/profile/seller");
    return navigate("/Login");
  };
  const toHome = () => navigate("/");

  const toLogin = () => {
    // toast.success("Logout succesfully");
    navigate("/login");
  };

  const toProduct = () => {
    navigate("/product");
  };

  const toBlog = () => navigate("/blog");
  const toRegister = () => navigate("/register");
  const toCart = () => navigate("/cart");
  const toChat = () => navigate("/chat");
  const toNotification = () => navigate("/notification");
  const toTracking = () => navigate("/order-track");

  const logoutHandler = () => {
    dispacth(
      authActions.logoutThunk(token, () => {
        toast.success("Logout succesfully");
        toLogin();
      })
    );
  };

  const showHamburger = () => {
    setToggle(!toggle);
  };

  const showPages = () => {
    setPages(!pages);
    setSearch(false)
    setShop(false)
  };

  const showShop = () => {
    setShop(!shop);
    setPages(false);
    setSearch(false)
  };

  const showSearch = () => {
    setSearch(!search);
    setPages(false);
    setShop(false)
  };

  const handleModal = () => setOpenModal(!openModal);

  return (
    <>
      <header className={`container-fluid `}>
        <div className={`row ${styles["navbar"]}`}>
          <div className="col-lg-3 col-6">
            <div className={styles["logo-content"]} onClick={toHome}>
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
                  <i
                    className="fa-solid fa-magnifying-glass"
                    onClick={showSearch}
                  ></i>
                </div>
                <div className={styles["love"]}>
                  <Link to="/wistlist">
                    <i className="fa-regular fa-heart"></i>
                  </Link>
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
                <li onClick={toHome}>HOME</li>
                <li onClick={showPages}>
                  PAGES <i className="fa-solid fa-chevron-down fs-6 ms-3"></i>
                </li>
                <li onClick={showShop}>
                  SHOP <i className="fa-solid fa-chevron-down fs-6 ms-3"></i>
                </li>
                <li onClick={toBlog}>BLOG</li>
              </ol>
            </div>
          </div>
          <div className={`col-lg-3 `}>
            <div className={styles["right-content"]}>
              <div className={`${styles["icon"]} ${styles["right-none"]}`}>
                <div className={styles["search"]}>
                  <i
                    className="fa-solid fa-magnifying-glass"
                    onClick={showSearch}
                  ></i>
                </div>
                <div className={styles["love"]}>
                  <Link to="/wistlist">
                    <i className="fa-regular fa-heart"></i>
                  </Link>
                </div>
                <div className={styles["shop"]}>
                  <i className="fa-solid fa-cart-shopping" onClick={toCart}></i>
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
              {toggle &&
                (token ? (
                  <div className={styles["hamburger-list"]}>
                    <ol className={styles["show"]}>
                      <li onClick={toProfile}>Profile</li>
                      <li onClick={toChat}>Chat</li>
                      <li onClick={toNotification}>Notification</li>
                      <li onClick={handleModal}>Logout</li>
                    </ol>
                  </div>
                ) : (
                  <div className={styles["hamburger-list"]}>
                    <ol className={styles["show"]}>
                      <li onClick={toLogin}>Login</li>
                      <li onClick={toRegister}>Register</li>
                    </ol>
                  </div>
                ))}
              {pages && (
                <div className={styles["pages-list"]}>
                  <ol className={styles["show"]}>
                    <Link to="/about">
                      <li>About Us</li>
                    </Link>
                    <Link to="/contact">
                      <li>Contact Us</li>
                    </Link>
                    <Link to="/comingsoon">
                      <li>Coming Soon</li>
                    </Link>
                    <Link to="/s">
                      <li>404 Page</li>
                    </Link>
                    <Link to="/FAQ">
                      <li>FAQ Page</li>
                    </Link>
                  </ol>
                </div>
              )}
              {shop && (
                <div className={styles["shop-list"]}>
                  <ol className={styles["show"]}>
                    <li onClick={toProduct}>Product</li>
                    <li onClick={()=> navigate('/cart')}>Shopping Cart</li>
                    <li onClick={()=> navigate('/cart/checkout')}>Check Out</li>
                    <li onClick={toProfile}>My Account</li>
                    <li onClick={toTracking}>Order Tracking</li>
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
      {search && (
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <div className={styles["search-bar"]}>
                <input type="text" placeholder="Search here ..." />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal show={openModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Spectrum</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to logout?</Modal.Body>
        <Modal.Footer>
          <Button className={styles["yes-btn"]} onClick={logoutHandler}>
            Yes
          </Button>
          <Button className={styles["close-btn"]} onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;

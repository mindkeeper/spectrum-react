import React from "react";
import { useNavigate } from "react-router-dom";

// import CSS
import css from "./CardHeaderProfile.module.css";

function CardHeaderProfile(props) {
  const navigate = useNavigate();

  const toMyProduct = () => navigate("/profile/seller/product");
  const toSelling = () => navigate("/profile/seller/selling-product");
  const toOrder = () => navigate("/profile/seller/order");

  return (
    <>
      <div className="container-fluid">
        <div className={`container py-5 ${css["box"]}`}>
          <div className="row d-flex flex-row align-items-center justify-content-start">
            <div
              className={`col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-one"]}`}
            >
              <span>Profile</span>
            </div>
            <div
              className={`col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-two"]}`}
            >
              <span onClick={toMyProduct}>
                My Product
                <i
                  className="fa-solid fa-chevron-down fs-6 ms-3"
                  onClick={props.show}
                ></i>
              </span>
            </div>
            <div
              className={`col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-three"]}`}
            >
              <span onClick={toSelling}>Selling Product</span>
            </div>
            <div
              className={`col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-four"]}`}
            >
              <span onClick={toOrder}>
                My Order
                <i
                  className="fa-solid fa-chevron-down fs-6 ms-3"
                  onClick={props.order}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHeaderProfile;

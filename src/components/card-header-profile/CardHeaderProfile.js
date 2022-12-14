import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import CSS
import css from "./CardHeaderProfile.module.css";

function CardHeaderProfile(props) {
  const navigate = useNavigate();
  const roles = useSelector((state) => state.auth.userInfo.roles);
  console.log(roles)

  const toProfile = () => {
    if (roles === 1) return navigate('/profile/customer')
    if (roles === 2) return navigate('/profile/seller')
    return navigate('/')
  }
  const toMyProduct = () => navigate("/profile/seller/product");
  const toSelling = () => navigate("/profile/seller/selling-product");
  const toOrder = () => navigate("/profile/seller/order");

  return (
    <>
      <div className="container-fluid">
        <div className={`container ${css["box"]}`}>
          <div className={`row ${css._content_nav_profile}`}>
            <div
              className={`col-lg-2 col-md-3 col-sm-12 ${css["header-profile-one"]}`}
            >
              <span onClick={toProfile}>Profile</span>
            </div>
            <div
              className={`col-lg-3 col-md-3 col-sm-12 ${css["header-profile-two"]}`}
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
              className={`col-lg-3 col-md-3 col-sm-12 ${css["header-profile-three"]}`}
            >
              <span onClick={toSelling}>Selling Product</span>
            </div>
            <div
              className={`col-lg-2 col-md-3 col-sm-12 ${css["header-profile-four"]}`}
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

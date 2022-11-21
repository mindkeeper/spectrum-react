import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./OTP.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/actions/auths";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import tittle from "../../components/tittle/Tittle";

function OTP() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [body, setBody] = useState({});
  const email = JSON.parse(localStorage.getItem("email"));

  const changeHandler = (e) =>
    setBody({
      ...body,
      [e.target.name]: e.target.value,
      email: email,
    });
  console.log(body);

  const errorMsg = useSelector((state) => state.auth.error);
  const fulfilled = useSelector((state) => state.auth.isFulilled);

  const toLogin = () => {
    navigate("/login");
  };
  // const successToast = () =>

  const errorToast = () => toast.error(`${errorMsg}`);

  const submitHandler = () => {
    dispacth(authActions.resetThunk(body, toLogin, errorToast));
    localStorage.removeItem("email");
  };

  useEffect(() => {
    if (fulfilled)
      toast.success(`Congrats! ${body.email} your password has been changed`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, [fulfilled]);

  tittle("Spectrum | OTP");
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
      <div className="container-fluid">
        <div className={`row ${styles["form-container"]}`}>
          <div className="col-lg-8 offset-lg-3 col-md-11 offset-md-2">
            <div className={styles["form"]}>
              <div className={styles["title-form"]}>
                <h1>Forgot your Password?</h1>
                <p>
                  Don't worry! Just fill in your email and we'll send you a link
                </p>
              </div>
              <div className={styles["form-login"]}>
                <form action="">
                  <input
                    type="text"
                    name="code"
                    placeholder="Input Code OTP *"
                    onChange={changeHandler}
                  />
                  <input
                    type="password"
                    name="new_password"
                    placeholder="Input Your New Password *"
                    onChange={changeHandler}
                  />
                  {/* <p>Forget your password?</p> */}
                </form>
              </div>
              <div className={styles["btn-login"]}>
                <button onClick={submitHandler}>Reset Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default OTP;

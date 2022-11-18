import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from "../../redux/actions/auths";

function ForgotPassword() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [body, setBody] = useState({});

  const changeHandler = (e) =>
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  console.log(body);

  const to = () => navigate("/forget-password/new");

  const submitHandler = () => {
    dispacth(authActions.resetThunk(body, to));
    localStorage.setItem("email", JSON.stringify(body.email));
  };

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
                    name="email"
                    placeholder="User name or email address *"
                    onChange={changeHandler}
                  />
                  {/* <p>Forget your password?</p> */}
                </form>
              </div>
              <div className={styles["btn-login"]}>
                <button onClick={submitHandler}>Get Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForgotPassword;

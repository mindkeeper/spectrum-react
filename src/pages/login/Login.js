import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authActions from "../../redux/actions/auths";

function Login() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [body, setBody] = useState({});

  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });
  console.log(body);

  const goHome = () => navigate("/");

  const submitHandler = () => {
    dispacth(authActions.loginThunk(body, goHome));
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
          <div className="col-lg-3 offset-lg-2">
            <div className={styles["account"]}>
              <div className={styles["login-account"]}>
                <h1>Login Account</h1>
              </div>
              <div className={styles["regist-account"]}>
                <h1>Register Account</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-12">
            <div className={styles["form"]}>
              <div className={styles["title-form"]}>
                <h1>Login</h1>
              </div>
              <div className={styles["form-login"]}>
                <form action="">
                  <input
                    onChange={changeHandler}
                    type="text"
                    name="email"
                    placeholder="User name or email address *"
                  />
                  <input
                    onChange={changeHandler}
                    type="password"
                    name="password"
                    placeholder="Password *"
                  />
                  <p>Forget your password?</p>
                </form>
              </div>
              <div className={styles["btn-login"]}>
                <button onClick={submitHandler}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;

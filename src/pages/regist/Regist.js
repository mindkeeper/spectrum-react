import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import title from "../../components/title/Title";
import styles from "./Regist.module.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerActions from "../../redux/actions/register";

function Regist() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [body, setBody] = useState({});
  const [selected, setSelected] = useState("register");
  const errorMsg = useSelector((state) => state.register.error);

  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });
  console.log(body);

  const toLogin = () => {
    // toast.success(`Congrats! ${body.email} register success`);
    navigate("/login");
  };

  const errorToast = () => {
    toast.error(`${errorMsg}`);
  };

  const submitHandler = () => {
    if (!body.email || !body.password || !body.roles)
      return toast.error("All input must be fulfilled");
    return dispacth(
      registerActions.registerThunk(
        body,
        () => {
          toast.success(`Congrats! ${body.email} register success`);
          toLogin();
        },
        errorToast
      )
    );
  };

  title("Spectrum | Register");
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
                <h1 onClick={toLogin}>Login Account</h1>
              </div>
              <div className={styles["regist-account"]}>
                <h1
                  onClick={() => {
                    setSelected("register");
                  }}
                  className={selected === "register" && `${styles["selected"]}`}
                >
                  Register Account
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-12">
            <div className={styles["form"]}>
              <div className={styles["title-form"]}>
                <h1>Create Account</h1>
              </div>
              <div className={styles["form-login"]}>
                <form>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email address*"
                    onChange={changeHandler}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password *"
                    onChange={changeHandler}
                  />
                  <div className={styles["radio"]}>
                    <div className={styles["input"]}>
                      <input
                        type="checkbox"
                        name="roles"
                        value="1"
                        onChange={changeHandler}
                      />
                      <label htmlFor="">I'm Customer</label>
                    </div>
                    <div className={styles["input"]}>
                      <input
                        type="checkbox"
                        name="roles"
                        value="2"
                        onChange={changeHandler}
                      />
                      <label htmlFor="">I'm Seller</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles["btn-login"]}>
                <button onClick={submitHandler}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Regist;

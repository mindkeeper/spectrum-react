import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Login.module.css";

function Login() {
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
                    type="text"
                    placeholder="User name or email address *"
                  />
                  <input type="password" placeholder="Password *" />
                  <p>Forget your password?</p>
                </form>
              </div>
              <div className={styles["btn-login"]}>
                <button>Login</button>
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

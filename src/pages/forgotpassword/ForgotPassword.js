import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./ForgotPassword.module.css";

function ForgotPassword() {
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
                <h1>Your email is wrong!</h1>
                <p>
                  Don't worry! Just fill in your email and we'll send you a link
                </p>
              </div>
              <div className={styles["form-login"]}>
                <form action="">
                  <input
                    type="text"
                    placeholder="User name or email address *"
                  />
                  <p>Forget your password?</p>
                </form>
              </div>
              <div className={styles["btn-login"]}>
                <button>Reset Password</button>
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

import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import title from "../../components/title/Title";
// import Modal from "react-bootstrap/Modal";
import styles from "./ForgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/actions/auths";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Button } from "react-bootstrap";

function ForgotPassword() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const [body, setBody] = useState({});
  // const [openModal, setOpenModal] = useState(false);

  const code = useSelector((state) => state.auth.code);
  // const errorMsg = useSelector((state) => state.auth.error);
  console.log(code);

  const changeHandler = (e) =>
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  console.log(body);

  // const handleClose = () => setOpenModal(!openModal);

  const toVerif = () => {
    toast.success(`Congrats! Your OTP has been sent to ${body.email}`);
    navigate("/forget-password/new");
  };

  const isError = (error) => {
    toast.error(`${error.response.data.msg}`);
    // console.log(error);
  };

  const submitHandler = () => {
    dispacth(authActions.resetThunk(body, toVerif, isError));
    localStorage.setItem("email", JSON.stringify(body.email));
    // setOpenModal(!openModal);
  };

  title("Spectrum | Forget Password");
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
      {/* <Modal show={openModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Spectrum</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your code is {code}</Modal.Body>
        <Modal.Footer>
          <Button className={styles["yes-btn"]} onClick={toVerif}>
            Verification Your Code
          </Button>
        </Modal.Footer>
      </Modal> */}
      <Footer />
    </>
  );
}

export default ForgotPassword;

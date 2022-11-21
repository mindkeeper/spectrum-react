import React from "react";
import { Link } from "react-router-dom";

import css from "./NotFound.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import title from "../../components/title/Title";
import oval from "../../asset/404/Mask.png";

function Error() {
  title("Spectrum | 404");
  return (
    <>
      <Header />

      <div className={`container ${css["content-inti"]}`}>
        <div className="row">
          <div className={`col-lg-7 ${css["content-left"]}`}>
            <div className={`${css["content-right-1"]}`}>
              <p className={`${css["content-text-1"]}`}>404</p>
              <p className={`${css["content-text-2"]}`}>
                Page cannot be found!
              </p>
              <p className={`${css["content-text-3"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo. Curabitur blandit
                ultrices exurabitur ut magna dignissim, dignissi
              </p>
            </div>
            <div className={`${css["content-right-2"]}`}>
              <div className={`${css["rules"]}`}></div>
              <Link to="/" className={`${css["content-text-4"]}`}>
                BACK TO HOMEPAGE
              </Link>
            </div>
          </div>
          <div className={`col-lg-5 ${css["oval"]}`}>
            <img src={oval} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Error;

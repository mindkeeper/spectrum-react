import React from "react";

import css from "./comingsoon.module.css";
import Header from "../../components/headerBlack/HeaderBlack";

function comingsoon() {
  return (
    <>
      <Header />
      <section className={`${css["main-content"]}`}>
        <div className={`${css["text-main"]}`}>We`re Building Something New</div>
        <div className={`${css["container-date"]}`}>
          <span className={`${css["date"]}`}>
            <div className={`${css["number"]}`}>09</div>
            <div className={`${css["text-date"]}`}>Days</div>
          </span>
          <span className={`${css["date"]}`}>
            <div className={`${css["number"]}`}>12</div>
            <div className={`${css["text-date"]}`}>Hours</div>
          </span>
          <span className={`${css["date"]}`}>
            <div className={`${css["number"]}`}>13</div>
            <div className={`${css["text-date"]}`}>Mins</div>
          </span>
          <span className={`${css["date"]}`}>
            <div className={`${css["number"]}`}>20</div>
            <div className={`${css["text-date"]}`}>Secs</div>
          </span>
        </div>
        <div className={`${css["subscribe-continer"]}`}>
          <input type="text" placeholder="Your Email" className={`${css["input"]}`} />
          <span className={`${css["subscribe-text"]}`}>Subscribe</span>
        </div>
      </section>
      <footer className={`${css["footer"]}`}>
        <section className={`${css["logo-name"]}`}>Spectrum</section>
        <section className={`${css["logo-detail"]}`}>
          Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque
          a nunc vel diam auctor commodo.
        </section>
        <section className={`${css["ikon"]}`}>
          <span className={`${css["around"]}`}>fb</span>
          <span>twit</span>
          <span>yt</span>
          <span>basket</span>
        </section>
      </footer>
    </>
  );
}

export default comingsoon;

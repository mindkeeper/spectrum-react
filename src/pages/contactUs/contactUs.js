import { React } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import css from "./contactUs.module.css";
import map from "../../asset/contact/map.png";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className={`${css["main-head"]}`}>
        <main className={`container-fluid ${css["sec-head"]}`}>
          <section className={`container ${css["main-sec"]}`}>
            <p className={`container ${css["about"]}`}>FAQ {">"} Contact Us</p>
            <p className={`container ${css["aboutus"]}`}>Contact Us</p>
          </section>
          <section>
            <div class="container">
              <div class="row">
                <div class="col">
                  <img src={map} alt="" />
                </div>
                <div class="col">
                  <form action="">
                    <p>Name</p>
                    <input type="text" placeholder="Enter Something"/>
                    <p>Name</p>
                    <input type="text" placeholder="Enter Something"/>
                    <p>Name</p>
                    <input type="text" placeholder="Enter Something"/>
                    <p>Name</p>
                    <input type="text" placeholder="Enter Something"/>
                    <p>Name</p>
                    <input type="text" placeholder="Enter Something"/>
                  </form>
                  <button>
                    Send Message
                  </button>

                  
                </div>
              </div>
            </div>
          </section>
        </main>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;

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
            <p className={`container ${css["contact"]}`}>FAQ {">"} Contact Us</p>
            <p className={`container ${css["contactus"]}`}>Contact Us</p>
          </section>
          <section className={`${css["second-sec"]}`}>
            <div className={`container ${css["div-sec"]}`}>
              <div class="row">
                <div className={`col ${css["img-wrap"]}`}>
                  <img className={` ${css["mapimg"]}`} src={map} alt="" />
                </div>
                <div className={`col ${css["form-wrap"]}`}>
                  <form action="">
                    <p className={` ${css["pdesc"]}`}>Name *</p>
                    <input className={` ${css["inp"]}`} type="text" placeholder=""/> 
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>Your Email *</p>
                    <input className={` ${css["inp"]}`} type="text" placeholder=""/>
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>You Website</p>
                    <input className={` ${css["inp"]}`} type="text" placeholder=""/>
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>Business Plan</p>
                    <input className={` ${css["inp"]}`} type="text" placeholder=""/>
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>Message</p> <br /> <br /> <br /> <br /> 
                    <input className={` ${css["inp"]}`} type="text" placeholder=""/>
                    <br /> <br /> 
                  </form>
                  
                  <button className={` ${css["button-send"]}`}>
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

import { React, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import css from "./contactUs.module.css";
import map from "../../asset/contact/map.png";
import { addContact } from "../../utils/fetchers";
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {

  const [body, setBody] = useState({});
  const token = useSelector((state) => state.auth.userInfo.token);

  const handleName = (e) => {
    setBody({ ...body, name: e.target.value });
  };
  const handleEmail = (e) => {
    setBody({ ...body, email: e.target.value });
  };
  const handleWeb = (e) => {
    setBody({ ...body, website: e.target.value });
  };
  const handlePlan = (e) => {
    setBody({ ...body, business_plan: e.target.value });
  };
  const handleMsg = (e) => {
    setBody({ ...body, message: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const result = await addContact(body, token);
      setBody({});
      toast.success("Success, we will follow up you soon!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
    
  // }, []);

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
                    <input onChange={handleName} className={` ${css["inp"]}`} type="text" placeholder="" name="name"/> 
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>Your Email *</p>
                    <input onChange={handleEmail} className={` ${css["inp"]}`} type="text" placeholder="" name="email"/>
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>You Website</p>
                    <input onChange={handleWeb} className={` ${css["inp"]}`} type="text" placeholder="" name="web"/>
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>Business Plan</p>
                    <input onChange={handlePlan} className={` ${css["inp"]}`} type="text" placeholder="" name="plan"/>
                    <br /> <br />
                    <p className={` ${css["pdesc"]}`}>Message</p> <br /> <br /> <br /> <br /> 
                    <input onChange={handleMsg} className={` ${css["inp"]}`} type="text" placeholder="" name="msg"/>
                    <br /> <br /> 
                  </form>
                  
                  <button onClick={handleSubmit} className={` ${css["button-send"]}`}>
                    Send Message
                  </button>
                  <ToastContainer />

                  
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

import { React } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import css from "./chat.module.css";
import img_1 from "../../asset/chat/man5.png";
import img_2 from "../../asset/chat/man6.png";
import dot from "../../asset/chat/dot.png";
import arrow from "../../asset/chat/arrow.png";

const Chat = () => {
  return (
    <>
      <Header />
      <main className={`container-fluid ${css["main-head"]}`}>
        <main className={`container-fluid ${css["sec-head"]}`}>
          <section className={`container ${css["main-sec"]}`}>
            <p className={`container ${css["aboutus"]}`}>Chat</p>
            <p className={`container ${css["about"]}`}>
              See your notifications for the latest updates{" "}
            </p>
          </section>
          <section className={`${css["head"]}`}>
            <div className={`container ${css["first-sec"]}`}>
              <div className={`row ${css["main"]}`}>
                <div className={`col-sm-5 ${css["row-one"]}`}>
                  <div class="container">
                    <div className={`row ${css["row-wrapper"]}`}>
                      <div className={`col-sm-4 ${css["img-wrapper"]}`}>
                        <img className={` ${css["img1"]}`} src={img_1} alt="" />
                        <img className={` ${css["dot"]}`} src={dot} alt="" />
                      </div>
                      <div class="col-sm-8">
                        <p className={` ${css["name1"]}`}>Engkos Kartika</p>
                        <p className={` ${css["online"]}`}>Online</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`col-sm-7 ${css["row-two"]}`}>
                  <div class="container">
                    <div className={`row ${css["row-wrapper2"]}`}>
                      <div className={`col-sm-4 ${css["img-wrapper"]}`}>
                        <img className={` ${css["img1"]}`} src={img_2} alt="" />
                        <img className={` ${css["dot"]}`} src={dot} alt="" />
                      </div>
                      <div class="col-sm-8">
                        <p className={` ${css["name2"]}`}>Jajang Nurrahman</p>
                        <p className={` ${css["online"]}`}>Online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside>
              <div class="container">
                <div class="row">
                  <div className={`col-sm-5 ${css["main-row"]}`}>
                    <div className={`container ${css["sub-row"]}`}>
                      <div className={`row ${css["row-wrapper3"]}`}>
                        <div className={`col-sm-4 ${css["img-wrapper"]}`}>
                          <img
                            className={` ${css["img1"]}`}
                            src={img_2}
                            alt=""
                          />
                          <img className={` ${css["dot"]}`} src={dot} alt="" />
                        </div>
                        <div class="col-sm-8">
                          <p className={` ${css["name3"]}`}>Jajang Nurrahman</p>
                          <p className={` ${css["online"]}`}>Online</p>
                          <img className={` ${css["arrow"]}`} src={arrow} alt="" />
                        </div>
                      </div>
                    </div>

                    <div class="container">
                      <div className={`row ${css["row-wrapper4"]}`}>
                        <div className={`col-sm-4 ${css["img-wrapper"]}`}>
                          <img
                            className={` ${css["img1"]}`}
                            src={img_1}
                            alt=""
                          />
                          <img className={` ${css["dot"]}`} src={dot} alt="" />
                        </div>
                        <div class="col-sm-8">
                          <p className={` ${css["name3"]}`}>Engkos Kartika</p>
                          <p className={` ${css["online"]}`}>Online</p>
                          <img className={` ${css["arrow"]}`} src={arrow} alt="" />
                        </div>
                      </div>
                    </div>
                    <section className={` ${css["end"]}`}></section>
                  </div>
                  <div className={`col-sm-7 ${css["end-wrap"]}`}>
                    <section className={` ${css["end-right"]}`}>
                     
                    </section>
                    <section className={` ${css["end-sec"]}`}>


                      <div class="container">
                        <div className={`row ${css["rowrow"]}`} >
                          <div className={`col-sm-9 ${css["endend"]}`}>
                          <p className={` ${css["fontend"]}`}>Write your Message...</p>
                          </div>
                          <div className={`col-sm-3 ${css["endend1"]}`} >
                          <button className={` ${css["butt"]}`}> Send</button>
                          </div>
                        </div>
                      </div> 
                    </section>
                  </div>
                </div>
              </div>
            </aside>
          </section>
          <aside className={` ${css["separator"]}`}>

          </aside>
        </main>
      </main>

      <Footer />
    </>
  );
};

export default Chat;

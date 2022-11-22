import { React } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import css from "./aboutUs.module.css";
import img_1 from "../../asset/aboutUs/table.png";
import img_2 from "../../asset/aboutUs/man1.png";
import img_3 from "../../asset/aboutUs/man2.png";
import img_4 from "../../asset/aboutUs/man3.png";
import img_5 from "../../asset/aboutUs/man4.png";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className={`container-fluid ${css["main-head"]}`}>
        <main className={`container-fluid ${css["sec-head"]}`}>
          <section className={`container ${css["main-sec"]}`}>
            <p className={`container ${css["about"]}`}>About {">"}</p>
            <p className={`container ${css["aboutus"]}`}>About Us</p>
          </section>
          <section className={`container ${css["first-sect"]}`}>
            <div className={`container ${css["wrap-first"]}`}>
              <div class="row">
                <div class="col">
                  <p className={` ${css["furniture"]}`}>
                    RAZ- Modern Furniture
                  </p>
                  <p className={` ${css["desc1"]}`}>
                    Quisque at justo sagittis, semper lacus a, iaculis tellus.
                    Fusce tempor, leo vel iaculis aliquet, dui turpis maximus
                    tellus, commodo congue Nam fermentum, augue eget pulvinar
                    ullamcorper, dui purus ornare nibh, eu congue ligula felis
                    nec diam liquam mollis nibh eu
                  </p>
                  <ul>
                    <li className={` ${css["desc1"]}`}>
                      Fusce risus ligula, semper et ultricies vitae
                    </li>
                    <li>Vivamus eget ante id velit varius lacinia</li>
                  </ul>
                  <p className={` ${css["desc1"]}`}>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue molestie eu et velit.
                    Praesent gravida magna eget interdum iaculis. Aliquam erat
                    volutpat. Integer placerat ipsum quis malesuada vehicula.
                    Vestibulum
                  </p>
                </div>
                <div className={`col ${css["w-img1"]}`}>
                  <img className={` ${css["img1"]}`} src={img_1} alt="" />
                </div>
              </div>
            </div>
          </section>
          <aside>
            <p className={` ${css["choose"]}`}>Why Should Choose Us?</p>
          </aside>
          <aside>
            <div class="container">
              <div className={`row row-cols-auto ${css["quality"]}`}>
                <div className={`col ${css["unique"]}`}>
                  <p>
                    {" "}
                    <b> Unique Design</b>
                  </p>{" "}
                  <br />
                  <p>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue
                  </p>
                </div>
                <div className={`col ${css["warranty"]}`}>
                  <p>
                    {" "}
                    <b> Good Wararanty Policy </b>
                  </p>{" "}
                  <br />
                  <p>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue
                  </p>
                </div>
                <div className={`col ${css["handcraft"]}`}>
                  <p>
                    {" "}
                    <b> Handcrafted Quality </b>
                  </p>
                  <br />
                  <p>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <br />
          <aside>
            <div class="container">
              <div className={`row row-cols-auto ${css["quality"]}`}>
                <div className={`col ${css["unique"]}`}>
                  <p>
                    {" "}
                    <b> Dedicated Support</b>
                  </p>
                  <br />
                  <p>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue
                  </p>
                </div>
                <div className={`col ${css["warranty"]}`}>
                  <p>
                    <b>Amazing Features</b>
                  </p>
                  <br />
                  <p>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue
                  </p>
                </div>
                <div className={`col ${css["handcraft"]}`}>
                  <p>
                    <b>Easy Customized</b>
                  </p>
                  <br />
                  <p>
                    Fusce risus ligula, semper et ultricies vitae, bibendum non
                    nisl. Nunc in libero quis felis congue
                  </p>
                </div>
              </div>
            </div>
          </aside>
          <aside className={`${css["meet-wrap"]}`}>
            <p className={`col ${css["meet"]}`}>Meet Our Team</p>
          </aside>
          <aside className={` ${css["pho-wrap"]}`}>
            <div class="container">
              <div className={`row row-cols-auto ${css["quality3"]}`}>
                <div className={`col ${css["listpeople1"]}`}>
                  <img className={` ${css["img2"]}`} src={img_2} alt="" />
                  <p className={` ${css["name"]}`}>
                    <b>Jajang Roberto</b>{" "}
                  </p>
                  <p>
                    <i>CEO-Founder</i>{" "}
                  </p>
                </div>
                <div className={`col ${css["listpeople1"]}`}>
                  <img className={` ${css["img2"]}`} src={img_3} alt="" />
                  <p className={` ${css["name"]}`}>
                    <b>Iker Kasian</b>{" "}
                  </p>
                  <p>
                    <i>Art Director</i>{" "}
                  </p>
                </div>
                <div className={`col ${css["listpeople1"]}`}>
                  <img className={` ${css["img2"]}`} src={img_4} alt="" />

                  <p className={` ${css["name"]}`}>
                    <b>Jeremy Button</b>{" "}
                  </p>
                  <p>
                    {" "}
                    <i> Products Manager</i>{" "}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </main>
        <section className={` ${css["endbody"]}`}>
          <p className={` ${css["endtext"]}`}>
            “Gave 5 stars for excellent customer service. I had a couple of
            questions which they replied <br /> quickly to answer. If I could give
            multiple reasons for my rating it would also be for the design <br />
            quality and customization to go along with the great service. The
            theme is excellent, keep up <br /> the great work."
          </p>

          <section className={` ${css["endimg"]}`}>
            <img className={` ${css["img5"]}`} src={img_5} alt="" />
          </section>
          <section>
            <br />
            <p className={` ${css["trevor"]}`} src={img_5}>Trevor Rivera - California</p>
            <br />
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;

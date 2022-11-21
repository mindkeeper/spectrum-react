import React from "react";

// import CSS
import css from "./Home.module.css";

// import component
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import CardHome from "../../components/card-home/CardHome";
import tittle from "../../components/tittle/Tittle"

// import image
import partner_1 from "../../asset/bg-home/backtowork.png";
import partner_2 from "../../asset/bg-home/furniture_2.png";
import partner_3 from "../../asset/bg-home/furniture_1.png";
import partner_4 from "../../asset/bg-home/workspace.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const toProduct = () => {
    navigate("/product");
  };

  tittle("Spectrum | Home")
  return (
    <>
      <div className={`container-fluid ${css["bg-top"]}`}>
        {/* isi header */}
        <Header />

        <div className="container">
          {/* content-top-home */}
          <div className="row">
            <div
              className={`col-lg-12 d-flex flex-column align-items-center ${css["content-top-home"]}`}
            >
              <h1 className={`text-center ${css["title-bar-top"]}`}>
                Minimal Furniture Store
              </h1>
              <p className={`text-center ${css["desc-bar-top"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
                Quisque a nunc vel diam auctor commodo.
                <br /> Curabitur blandit ultrices ex. Curabitur ut magna
                dignissim, dignissim
              </p>
              <div className={css["explore"]}>
                <p
                  className={`text-center ${css["explore-more"]}`}
                  onClick={toProduct}
                >
                  Explore now
                </p>
                <i
                  className={`fa-solid fa-arrow-down ${css["arrow-down"]}`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={css["main-content"]}>
        {/* Card Product Home */}
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
      <div className={`container-fluid ${css["content-bottom-home"]}`}>
        <div className="row d-flex flex-column align-items-center">
          <div className={`col-lg-7 col-md-12 col-sm-12 ${css["ceo"]}`}>
            <p className={`text-center ${css["promo-home"]}`}>
              Gave 5 stars for excellent customer service. I had a couple of
              questions which they replied quickly to answer. If I could give
              multiple reasons for my rating it would also be for the design
              quality and customization to go along with the great service. The
              theme is excellent, keep up the great work.
            </p>
            <hr className={css["rule"]} />
            <p className={css["name-ceo"]}>Trevor Rivera - CEO IKEA</p>
          </div>
          <div className={`row ${css["logo-parter"]}`}>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center text-white mt-5">
              <img src={partner_1} alt="Back To Work" width="150px" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center text-white mt-5">
              <img src={partner_2} alt="Back To Work" width="150px" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center text-white mt-5">
              <img src={partner_3} alt="Back To Work" width="150px" />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center text-white mt-5">
              <img src={partner_4} alt="Back To Work" width="150px" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;

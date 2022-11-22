import React from "react";

import css from "./Faq.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import delivery from "../../asset/FAQ/delivery-2.png";
import wallet from "../../asset/FAQ/dompet.png";
import misscela from "../../asset/FAQ/miscella.png";
function faq() {
  return (
    <>
      <Header />

      <section className={`${css["pages-about"]}`}>
        <span className={`${css["little"]}`}>FAQ &gt;</span>
        <span className={`${css["bottom-tittle"]}`}>
          <div className={`${css["bottom-tittle-faq"]}`}>FAQ</div>
          <div className={`${css["bottom-tittle-freq"]}`}>Frequently Asked Questions</div>
        </span>
      </section>
      <section className={`${css["detail-pages"]}`}>
        <section className={`${css["detail-question"]}`}>
          <section>
            <div className={`${css["images-tittle"]}`}>
              <div className={css["around"]}>
                <img src={delivery} alt="" />
              </div>
            </div>
            <div className={`${css["tittle"]}`}>
              <div className={`${css["line"]}`}></div>
              <p className={`${css["tittle-desc"]}`}>Shopping Questions</p>
              <div className={`${css["line"]}`}></div>
            </div>
          </section>
          <section>
            <div className={`${css["content"]}`}>
              <span className={`${css["left-content"]}`}>
                <div className={`${css["top-content"]}`}>
                  Do you ship worldwide?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
              <span>
                <div className={`${css["top-content"]}`}>
                  How can I use a coupon code?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
            </div>
            <div className={`${css["content"]}`}>
              <span className={`${css["left-content"]}`}>
                <div className={`${css["top-content"]}`}>
                  Do you offer gift-vouchers?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
              <span>
                <div className={`${css["top-content"]}`}>
                  How can I request a refund?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
            </div>
          </section>
        </section>
        <section className={`${css["detail-question"]}`}>
          <section>
            <div className={`${css["images-tittle"]}`}>
              <div className={css["around"]}>
                <img src={wallet} alt="" />
              </div>
            </div>
            <div className={`${css["tittle"]}`}>
              <div className={`${css["line"]}`}></div>
              <p className={`${css["tittle-desc"]}`}>Payment Questions</p>
              <div className={`${css["line"]}`}></div>
            </div>
          </section>
          <section>
            <div className={`${css["content"]}`}>
              <span className={`${css["left-content"]}`}>
                <div className={`${css["top-content"]}`}>
                  Do you ship worldwide?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
              <span>
                <div className={`${css["top-content"]}`}>
                  How can I use a coupon code?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
            </div>
            <div className={`${css["content"]}`}>
              <span className={`${css["left-content"]}`}>
                <div className={`${css["top-content"]}`}>
                  Do you offer gift-vouchers?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
              <span>
                <div className={`${css["top-content"]}`}>
                  How can I request a refund?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
            </div>
          </section>
        </section>
        <section className={`${css["detail-question"]}`}>
          <section>
            <div className={`${css["images-tittle"]}`}>
              <div className={css["around"]}>
                <img src={misscela} alt="" />
              </div>
            </div>
            <div className={`${css["tittle"]}`}>
              <div className={`${css["line"]}`}></div>
              <p className={`${css["tittle-desc"]}`}>Miscellaneous Questions</p>
              <div className={`${css["line"]}`}></div>
            </div>
          </section>
          <section>
            <div className={`${css["content"]}`}>
              <span className={`${css["left-content"]}`}>
                <div className={`${css["top-content"]}`}>
                  Do you ship worldwide?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
              <span>
                <div className={`${css["top-content"]}`}>
                  How can I use a coupon code?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
            </div>
            <div className={`${css["content"]}`}>
              <span className={`${css["left-content"]}`}>
                <div className={`${css["top-content"]}`}>
                  Do you offer gift-vouchers?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
              <span>
                <div className={`${css["top-content"]}`}>
                  How can I request a refund?
                </div>
                <div className={`${css["bottom-content"]}`}>
                  This is the third article of a three-part series. I`m
                  illustrating the marketing challenges of PrescottWeddings.com,
                  a small business. If you don`t remember anything else about
                  marketing, remember this: Frequency is king.
                </div>
              </span>
            </div>
          </section>
        </section>
        <section className={`${css["footer"]}`}>
          <div className={`${css["footer-1"]}`}>You Still Need Help?</div>
          <div className={`${css["footer-2"]}`}>contact us</div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default faq;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

import css from "./ProductdetailReview.module.css";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CardComment from "../../../components/card-comment/CardComment";
import CardInputComment from "../../../components/card-input-comment/CardInputComment";
import title from "../../../components/title/Title";

import list_product_1 from "../../../asset/productdetailreview/product-1.png";
import list_product_2 from "../../../asset/productdetailreview/product-2.png";
import hot_label from "../../../asset/productdetailreview/hot_lable.png";

function ProductdetailReview() {
  const navigate = useNavigate();

  const toReview = () => navigate("/product/detail/review");
  const toDescription = () => navigate("/product/detail");

  title("Spectrum | Product Detail");

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className={`container-fluid ${css["content-bar"]}`}>
        <nav className={css.bar}>
          <section className={css.title_product_shop}>
            Shop <i class="fa-solid fa-angle-right"></i>
            <span>
              <Link className={css.title_product} to="#">
                Shop Right Sidebar <i class="fa-solid fa-angle-right"></i>
              </Link>
            </span>
            <span>
              <Link className={css.title_product} to="#">
                Product
              </Link>
            </span>
          </section>
        </nav>
      </div>

      {/* Content Picture */}
      <div className={`container ${css.content_product_preview}`}>
        <div className={`row ${css["c-product"]}`}>
          <div className={`col-lg-3 col-md-12 ${css.list_product}`}>
            <img src={list_product_1} alt="list_product_1" />
            <img src={list_product_1} alt="list_product_1" />
            <img src={list_product_1} alt="list_product_1" />
            <img src={list_product_1} alt="list_product" />
          </div>
          <div className={`col-lg-9 col-md-12 ${css.product_preview}`}>
            <img
              src={list_product_2}
              alt="list_product"
              className={`${css.preview}`}
            />
            <img src={hot_label} alt="list_product" className={`${css.hot}`} />
          </div>
        </div>
      </div>

      {/* detail product */}
      <div className={`container ${css["c-detail"]}`}>
        <p className={`${css.detail_title}`}>
          Coaster Home Furnishings Sofa in Oatmeal
        </p>
        <div className={`${css.detail_review}`}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span className={`${css.view}`}>2 (reviews)</span>
        </div>
        <div className={`${css.detail_price}`}>
          <span className={`${css.detail_price_price}`}>$765.99</span>
          <i className="fa-regular fa-circle-check"></i>
          <span className={`${css.detail_price_stock}`}>
            19 Sold / 40 In Stock
          </span>
        </div>
        <div className={`${css.detail_desc}`}>
          <p>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices
            exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit.
            Proin dui lacus, viverra at imperdiet non, facilisis eget orci.
            Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam
            eu, pretium finibus libero. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae
            neque tellus.
          </p>
        </div>

        <div className={`${css.detail_submit}`}>
          {/* button + or - product */}
          <div className={` ${css["add-product"]}`}>
            <button>
              <i class="fa-solid fa-minus"></i>
            </button>
            <input type="text" value="01" />
            <button>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          {/* add to cart */}
          <div className={`${css.add_cart}`}>
            <button>Add to cart</button>
          </div>
          {/* add favorite */}
          <div className={`${css.favorite}`}>
            <button>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
          {/* add wistlist*/}
          <div className={`${css.add_wistlist}`}>
            <button>Add to wistlist</button>
          </div>
        </div>
      </div>

      <div className={`container ${css.detail_list}`}>
        <p>SKU: N/A</p>
        <p>Categories: Furniture, Interior, Chair</p>
        <p>Tag: Furniture, Chair, Scandinavian, Modern</p>
        <p>Product ID: 274</p>
      </div>

      <div className={`container ${css["detail-location"]}`}>
        <div className={`${css.location}`}>
          <i className="fa-solid fa-truck"></i>
          <p>Delivery and return</p>
        </div>
        <div className={`${css.location}`}>
          <i className="fa-solid fa-ruler-horizontal"></i>
          <p>Size guides</p>
        </div>
        <div className={`${css.location}`}>
          <i className="fa-solid fa-location-dot"></i>
          <p>Store availability</p>
        </div>
      </div>

      <div className={`container ${css.sosial_media}`}>
        <div className={`${css["icon-style"]}`}>
          <span className={`${css["facebook-container"]}`}>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i className="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-youtube"></i>
          </span>
        </div>
      </div>

      {/* Navbar product detail */}
      <div className={`container ${css["detail-bar-product"]}`}>
        <div className={`${css["bar-product-detail"]}`}>
          <p onClick={toDescription}>Description</p>
          <p onClick={toReview}>Review</p>
          <p>Additional Information</p>
          <p>About Brand</p>
          <p>Shipping & Delivery</p>
        </div>
      </div>

      <div className={css.comment_box}>
        <CardComment />
        <CardInputComment />
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default ProductdetailReview;

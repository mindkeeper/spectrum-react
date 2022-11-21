import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import css
import css from "./Productdetail.module.css";

// import components
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import CardProductDetail from "../../../components/card-productdetail/CardProductDetail";
import title from "../../../components/title/Title";

// import image
import list_product_2 from "../../../asset/productdetail/product-2.png";
import hot_label from "../../../asset/productdetail/hot_lable.png";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../../redux/actions/product";
import LoadingBar from "../../../components/loading/LoadingBar";

function Productdetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toReview = () => navigate("/product/detail/review");
  const toDescription = () => navigate("/product/detail");
  const product = useSelector((state) => state.products.detailProduct);
  const isLoading = useSelector((state) => state.products.isLoading);
  console.log(product);
  const [image, setImage] = useState(null);
  const { id } = useParams();

  const currency = (price) => {
    return (
      "IDR " +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
  };
  // const setCategories = (categories) => {
  //   let result = "";
  //   categories.forEach((e, i, arr) => {
  //     if (i === arr.length - 1) {
  //       result += `${e}`;
  //     } else {
  //       result = `${e}, `;
  //     }
  //   });
  //   return result;
  // };

  useEffect(() => {
    dispatch(productActions.getDetailsThunk(`/products/details/${id}`));
  }, [dispatch]);
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
            {isLoading ? (
              <LoadingBar />
            ) : (
              product.images.map((image, index) => (
                <img src={image} key={index} alt={`product detail ${index}`} />
              ))
            )}
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
        <p className={`${css.detail_title}`}>{product.product_name}</p>
        <div className={`${css.detail_review}`}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span className={`${css.view}`}>2 (reviews)</span>
        </div>
        <div className={`${css.detail_price}`}>
          <span className={`${css.detail_price_price}`}>
            {currency(product.price)}
          </span>
          <i className="fa-regular fa-circle-check"></i>
          <span className={`${css.detail_price_stock}`}>
            {product.stock} in stock
          </span>
        </div>
        <div className={`${css.detail_desc}`}>
          <p>{product.description}</p>
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

      {isLoading ? (
        <LoadingBar />
      ) : (
        <div className={`container ${css.detail_list}`}>
          <p>SKU: N/A</p>
          {/* <p></p> */}
          <p>Categories : {`${product.categories}`}</p>
          <p>Product ID: {product.id}</p>
        </div>
      )}

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

      <CardProductDetail />

      {/* footer */}
      <Footer />
    </>
  );
}

export default Productdetail;

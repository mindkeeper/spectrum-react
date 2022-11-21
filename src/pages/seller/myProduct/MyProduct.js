import React, { useEffect, useState } from "react";
import styles from "./MyProduct.module.css";
import Header from "../../../components/header/Header";
import Tab from "../../../components/card-header-profile/CardHeaderProfile";
import Footer from "../../../components/footer/Footer";
import Card from "../../../components/cardMyProduct/CardMyProduct";
import title from "../../../components/title/Title";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../../redux/actions/product";
// import authActions from "../../../redux/actions/auths";
import {
  createSearchParams,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Loading from "../../../components/loading/Loading";

function MyProduct() {
  const [dropdown, setDropdown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({});
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productSeller);
  const isLoading = useSelector((state) => state.products.isLoading);
  const token = useSelector((state) => state.auth.userInfo.token);
  // const { id } = useParams();
  // console.log(product);
  // console.log(token);
  const active = () => {
    setDropdown(!dropdown);
  };

  // const deleteHandler = () => {
  //   dispatch(productActions.delProductThunk(`/products/delete/${id}`));
  // };

  useEffect(() => {
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    dispatch(productActions.getProductSellerThunk(token, query));
  }, [query, searchParams]);

  // useEffect(() => {
  //   dispatch(productActions.delProductThunk(`/products/delete/${id}`));
  // }, [dispatch]);

  title("Spectrum | My Product");
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <main className={`col-lg-12 ${styles["page-title"]}`}>
            <h1>My Account</h1>
            <p>
              Register and log in with your account to be able to shop at will
            </p>
          </main>
        </div>
      </div>
      <Tab show={active} />
      {dropdown && (
        <div className={styles["dropdown"]}>
          <ol>
            <li
              onClick={() => {
                setQuery({});
              }}
            >
              All
            </li>
            <li
              onClick={() => {
                setQuery({
                  ...query,
                  filter: "archived",
                });
              }}
            >
              Archieve
            </li>
            <li
              onClick={() => {
                setQuery({
                  ...query,
                  filter: "sold-out",
                });
              }}
            >
              Sold Out
            </li>
          </ol>
        </div>
      )}

      <div className="container">
        <div className={`row ${styles["product-tab"]}`}>
          <div className="col-lg-4 col-md-4 col-4">
            <h1>Product</h1>
          </div>
          <div className="col-lg-3 col-md-3 col-2">
            <h1>Stock Status</h1>
          </div>
          <div className="col-lg-2 col-md-2 col-2">
            <h1>Price</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`row ${styles["product-content"]}`}>
          {isLoading ? (
            <Loading />
          ) : (
            product?.map((e) => (
              <Card
                image={e.image}
                name={e.product_name}
                stock={e.stock}
                price={e.price}
                id={e.id}
                key={e.id}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyProduct;

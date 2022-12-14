import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import title from "../../components/title/Title";
import LoadingBar from "../../components/loading/Loading";
import styles from "./Product.module.css";

import Card from "../../components/cardProduct/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product";
import CardCategory from "../../components/cardCategory/CardCategory";
import CardBrand from "../../components/cardBrand/CardBrand";
import categoriesActions from "../../redux/actions/categories";
import { createSearchParams, useSearchParams } from "react-router-dom";
import brandsActions from "../../redux/actions/brands";

// const useQuery = () => {
//   const { search } = useLocation();

//   return useMemo(() => new URLSearchParams(search), [search]);
// };

function Product() {
  const [show, setShow] = useState(false);

  const products = useSelector((state) => state.products.products);
  const totalPage = useSelector((state) => state.products.meta.totalPage);
  const categories = useSelector((state) => state.categories.categories);
  const brands = useSelector((state) => state.brands.brands);
  const isLoading = useSelector((state) => state.products.isLoading);
  // const isError = useSelector((state) => state.products.isError);

  const dispacth = useDispatch();
  // const getQuery = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState({
    minPrice: "0",
    maxPrice: "0",
  });
  const [query, setQuery] = useState({
    limit: "6",
    page: 1,
  });

  const dropdownHandler = () => {
    setShow(!show);
  };

  const changeHandler = (e) => {
    setPrice({
      ...price,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(price);

  useEffect(() => {
    const urlSearchParams = createSearchParams({ ...query });
    setSearchParams(urlSearchParams);
    dispacth(productActions.getProductThunk(query));
  }, [dispacth, query, setSearchParams]);

  useEffect(() => {
    dispacth(categoriesActions.getCategoriesThunk());
  }, [dispacth]);

  useEffect(() => {
    dispacth(brandsActions.getBrandsThunk());
  }, [dispacth]);

  title("Spectrum | Product");
  return (
    <>
      <Header setQuery={setQuery} />
      <div className="container-fluid">
        <div className={`row ${styles["page-title"]}`}>
          <div className="container">
            <div className="col-12">
              <div className={styles["side-page"]}>
                <p>
                  Shop <span>&#62;</span> Shop Right Sidebar
                </p>
              </div>
            </div>
            <div className={`col-lg-12 text-center`}>
              <h1>My Account</h1>
              <p>
                Register and log in with your account to be able to shop at will
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`row ${styles["main-content"]}`}>
          <div className="col-lg-3 col-md-3 col-5">
            <div className={styles["left-content"]}>
              <div className={styles["product-categories"]}>
                <div className={styles["title"]}>
                  <h1>Categories</h1>
                </div>
                <div className={styles["content"]}>
                  {categories?.map((e) => (
                    <CardCategory
                      name={e.category_name}
                      unit={e.total_product}
                      id={e.id}
                      key={e.id}
                      setQuery={setQuery}
                    />
                  ))}
                </div>
              </div>
              <div className={styles["product-price"]}>
                <div className={styles["title"]}>
                  <h1>Price</h1>
                </div>
                <div className={styles["content"]}>
                  <p>Min Price</p>
                  <input
                    type="number"
                    name="minPrice"
                    value={price.minPrice}
                    onChange={changeHandler}
                  />
                </div>
                <div className={styles["content"]}>
                  <p>Max Price</p>
                  <input
                    type="number"
                    name="maxPrice"
                    value={price.maxPrice}
                    onChange={changeHandler}
                  />
                </div>
                {/* <div className={styles["slider"]}>
                  <div className={styles["progress"]}></div>
                </div> */}
                {/* <div className={styles["range-input"]}>
                  <input
                    type="text"
                    class="range-min"
                    min="0"
                    max="1000000"
                    // value="250000"
                  />
                  <input
                    type="range"
                    class="range-max"
                    min="0"
                    max="1000000"
                    // value="750000"
                  />
                </div> */}
                {/* <div className={styles["bar"]}>
                  <span className={styles["left-circle"]}></span>
                  <span className={styles["line"]}></span>
                  <span className={styles["right-circle"]}></span>
                </div> */}
              </div>
              <div className={styles["filter"]}>
                <div
                  className={styles["filter-container"]}
                  onClick={() => setQuery(price)}
                >
                  <p>FILTER</p>
                </div>
              </div>
              <div className={styles["product-brands"]}>
                <div className={styles["title"]}>
                  <h1>Brands</h1>
                </div>
                <div className={styles["content"]}>
                  {brands?.map((e) => (
                    <CardBrand
                      name={e.brand_name}
                      id={e.id}
                      key={e.id}
                      setQuery={setQuery}
                    />
                  ))}
                </div>
              </div>
              <div className={styles["product-colors"]}>
                <div className={styles["title"]}>
                  <h1>Colors</h1>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["pallete"]}>
                    <span onClick={() => setQuery({ colorId: 1 })}></span>
                    <span onClick={() => setQuery({ colorId: 2 })}></span>
                    <span onClick={() => setQuery({ colorId: 3 })}></span>
                    <span onClick={() => setQuery({ colorId: 4 })}></span>
                    <span onClick={() => setQuery({ colorId: 5 })}></span>
                    <span onClick={() => setQuery({ colorId: 6 })}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-7">
            <div className={styles["right-content"]}>
              <div className={styles["right-tab"]}>
                <div className={styles["paginate-title"]}>
                  <p>{`Showing page ${query.page} of ${totalPage}`}</p>
                  {/* <p>Showing 1-16 of 39 Results</p> */}
                </div>
                <div className={styles["sort-dropdown"]}>
                  <p onClick={dropdownHandler}>
                    Sort by <span>&#9661;</span>
                  </p>
                </div>
              </div>
              {show && (
                <div className={styles["dropdown-list"]}>
                  <ol>
                    <li
                      onClick={() => {
                        setQuery({
                          ...query,
                          sort: "oldest",
                        });
                      }}
                    >
                      oldest
                    </li>
                    <li
                      onClick={() => {
                        setQuery({
                          ...query,
                          sort: "newest",
                        });
                      }}
                    >
                      newest
                    </li>
                    <li
                      onClick={() => {
                        setQuery({
                          ...query,
                          sort: "priciest",
                        });
                      }}
                    >
                      priciest
                    </li>
                    <li
                      onClick={() => {
                        setQuery({
                          ...query,
                          sort: "cheapest",
                        });
                      }}
                    >
                      cheapest
                    </li>
                  </ol>
                </div>
              )}
              <div className={styles["card-container"]}>
                {isLoading ? (
                  <LoadingBar />
                ) : (
                  products?.map((e) => (
                    <Card
                      productName={e.product_name}
                      price={e.price}
                      image={e.image}
                      id={e.id}
                      key={e.id}
                    />
                  ))
                )}
              </div>
              {/* <div className={styles["paginate-page"]}>
                <div className={styles["page-container"]}>
                  <p>01</p>
                </div>
              </div> */}
              <div className={`${styles["paginate-container"]}`}>
                <div className={styles["title-paginate"]}>
                  {/* <p>{`showing page ${query.page} of ${totalPage}`}</p> */}
                </div>
                <div className={styles["btn-paginate"]}>
                  <button
                    onClick={() => {
                      setQuery({ ...query, page: query.page - 1 });
                    }}
                    // disabled={query.page === 1 ? true : false}
                    className={`${styles["btn-prev"]} ${
                      query.page === 1 && styles["disable-btn"]
                    }`}
                  >
                    prev
                  </button>
                  <button
                    onClick={() => {
                      setQuery({ ...query, page: query.page + 1 });
                    }}
                    // disabled={query.page === totalPage ? true : false}
                    className={`${styles["btn-next"]} ${
                      query.page === totalPage && styles["disable-btn"]
                    }`}
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;

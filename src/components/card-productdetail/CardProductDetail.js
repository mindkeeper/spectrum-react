import React, { useEffect } from "react";

import css from "./CardProductDetail.module.css";

import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";

export default function CardProductDetail({ id, currency, imageProps }) {
  console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const related = useSelector((state) => state.products.related);
  const isLoading = useSelector((state) => state.products.isLoading);
  console.log(related);
  useEffect(() => {
    dispatch(productActions.getRelatedThunk(`/products/related/${id}`));
  }, [dispatch, id]);
  return (
    <>
      <div className={`container ${css["desc-bar"]}`}>
        <div className={`row ${css["content-bar-description"]}`}>
          <div
            className={`col-lg-5 col-md-12 col-sm-12 ${css["image-description"]}`}
          >
            {isLoading ? (
              <Loading />
            ) : (
              <img src={imageProps} alt="product_image" />
            )}
          </div>
          <div
            className={`col-lg-7 col-md-12 col-sm-12 ${css["image-description_1"]}`}
          >
            <p>
              Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
              egestas magna molestie a. Proin ac ex maximus, ultrices justo
              eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in
              vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat
              tellus at, hendrerit arcu..
            </p>
            <ul className={`${css.style_li}`}>
              <li>
                Maecenas eu ante a elit tempus fermentum. Aliquam commodo
                tincidunt semper
              </li>
              <li>
                Aliquam est et tempus. Eaecenas libero ante, tincidunt vel
              </li>
            </ul>
            <p>
              Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas
              eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper.
              Phasellus accum
            </p>
          </div>
        </div>
        <p className={`${css.relate}`}>Related Products</p>
        <div className={`row ${css["relate-1"]}`}>
          {isLoading ? (
            <Loading />
          ) : (
            related.map((item) => (
              <div
                className={`col-lg-4 col-md-12 col-sm-12 ${css["relate-2"]}`}
              >
                <img
                  src={item.images}
                  alt="product"
                  onClick={() => {
                    navigate(`product/detail/${item.id}`);
                  }}
                />
                <p className={`${css.type}`}>{item.product_name}</p>
                <p className={`${css.type_price}`}>{currency(item.price)}</p>
              </div>
            ))
          )}
        </div>
        <div className={`${css["circle"]}`}>
          <i class="fa-solid fa-circle"></i>
          <i class="fa-regular fa-circle"></i>
          <i class="fa-regular fa-circle"></i>
        </div>
      </div>
    </>
  );
}

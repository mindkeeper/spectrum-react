import React, { useEffect, useState } from "react";
import styles from "./Selling.module.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Tab from "../../../components/card-header-profile/CardHeaderProfile";
import title from "../../../components/title/Title";
import { useDispatch, useSelector } from "react-redux";
import categoriesActions from "../../../redux/actions/categories";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Selling() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const token = useSelector((state) => state.auth.userInfo.token);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [condition, setCondition] = useState("");
  const [brand, setBrand] = useState(0);
  const [color, setColor] = useState(0);
  const [categoryIds, setCategoryIds] = useState([]);
  const [images, setImages] = useState([]);

  const handlercateory = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCategoryIds([...categoryIds, value]);
    } else {
      setCategoryIds(categoryIds.filter((v) => v !== value));
    }
  };

  const deleteImage = (index) => {
    setImages(images.filter((image, i) => i !== index));
  };

  useEffect(() => {
    dispatch(categoriesActions.getCategoriesThunk());
  }, [dispatch]);

  const addProduct = () => {
    let formdata = new FormData();
    formdata.append("product_name", name);
    formdata.append("price", price);
    formdata.append("categories", categoryIds);
    formdata.append("stock", stock);
    formdata.append("brand_id", brand);
    formdata.append("color_id", color);
    formdata.append("conditions", condition);
    formdata.append("description", desc);
    images.forEach((image) => {
      formdata.append("images", image);
    });
    axios
      .post(`${process.env.REACT_APP_BACKEND_HOST}/products/new`, formdata, {
        headers: {
          "x-access-token": token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => toast.success("Product added successfully"))
      .catch((err) => console.log(err));
  };

  title("Spectrum | Selling Product");
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
      <Tab />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className={styles["inventory"]}>
              <div className={styles["title"]}>
                <h1>Inventory</h1>
              </div>
              <form action="">
                <div className={styles["name-good"]}>
                  <input
                    type="text"
                    placeholder="Name of goods *"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className={styles["desc-good"]}>
                  <textarea
                    type="text"
                    placeholder="Description Product *"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                  />
                </div>
              </form>
            </div>
            <div className={styles["item-detail"]}>
              <div className={styles["title"]}>
                <h1>Item Details</h1>
              </div>
              <form action="">
                <div className={styles["unit-price"]}>
                  <input
                    type="number"
                    placeholder="Unit price *"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </div>
                <div className={styles["unit-stock"]}>
                  <input
                    type="number"
                    placeholder="Unit Stock *"
                    min="0"
                    onChange={(e) => setStock(e.target.value)}
                    value={stock}
                  />
                </div>
              </form>
            </div>
            <div className={styles["product-condition"]}>
              <div className={styles["title"]}>
                <h1>Stock Condition</h1>
              </div>
              <div className={styles["radio"]}>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="condition"
                    onClick={() => {
                      setCondition("new");
                    }}
                  />
                  <label htmlFor="">New Product</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="condition"
                    onClick={() => {
                      setCondition("second");
                    }}
                  />
                  <label htmlFor="">Second Product</label>
                </div>
              </div>
            </div>
            <div className={styles["brands"]}>
              <div className={styles["title"]}>
                <h1>Brands</h1>
              </div>
              <div className={styles["radio"]}>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="brands"
                    onClick={() => setBrand(1)}
                  />
                  <label htmlFor="">IKEA</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="brands"
                    onClick={() => setBrand(2)}
                  />
                  <label htmlFor="">Informa</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="brands"
                    onClick={() => setBrand(3)}
                  />
                  <label htmlFor="">North Oxford</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="brands"
                    onClick={() => setBrand(4)}
                  />
                  <label htmlFor="">Sweet House</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="brands"
                    onClick={() => setBrand(5)}
                  />
                  <label htmlFor="">Mr. Poppin 1929</label>
                </div>
              </div>
            </div>
            <div className={styles["colors"]}>
              <div className={styles["title"]}>
                <h1>Colors</h1>
              </div>
              <div className={styles["radio"]}>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="color"
                    onClick={() => setColor(1)}
                  />
                  <label htmlFor="">Luxor Gold</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="color"
                    onClick={() => setColor(2)}
                  />
                  <label htmlFor="">Ship Cove</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="color"
                    onClick={() => setColor(3)}
                  />
                  <label htmlFor="">Armadillo</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="color"
                    onClick={() => setColor(4)}
                  />
                  <label htmlFor="">East Bay</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="color"
                    onClick={() => setColor(5)}
                  />
                  <label htmlFor="">Hippe Green</label>
                </div>
                <div className={styles["form"]}>
                  <input
                    type="radio"
                    name="color"
                    onClick={() => setColor(6)}
                  />
                  <label htmlFor="">Fuel Yellow</label>
                </div>
              </div>
            </div>
            <div className={styles["category"]}>
              <div className={styles["title"]}>
                <h1>Category</h1>
              </div>
              <div className={styles["radio"]}>
                {categories &&
                  categories.length > 0 &&
                  categories.map((item) => {
                    return (
                      <div className={styles["form"]} key={item.id}>
                        <input
                          type="checkbox"
                          value={item.id}
                          onChange={handlercateory}
                        />
                        <label>{item.category_name}</label>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles["photo-good"]}>
              <div className={styles["title"]}>
                <h1>Photo of Goods</h1>
              </div>
              <div style={{ display: "flex", gap: "2rem" }}>
                {images &&
                  images.length > 0 &&
                  images.map((image, index) => {
                    return (
                      <img
                        className={styles["image"]}
                        alt=""
                        key={index}
                        src={URL.createObjectURL(image)}
                        onClick={() => deleteImage(index)}
                      />
                    );
                  })}
                {images.length < 5 && (
                  <label for="img-product">
                    <div className={styles["add-photo"]}>
                      <input
                        style={{ display: "none" }}
                        type="file"
                        id="img-product"
                        onChange={(e) =>
                          setImages([...images, e.target.files[0]])
                        }
                      />
                      <i className="fa-solid fa-plus"></i>
                      <p>Add more image</p>
                    </div>
                  </label>
                )}
                <button onClick={addProduct}>addProduct</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Selling;

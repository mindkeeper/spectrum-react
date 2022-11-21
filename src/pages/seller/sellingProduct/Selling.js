import React from "react";
import styles from "./Selling.module.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Tab from "../../../components/card-header-profile/CardHeaderProfile";
import tittle from "../../../components/tittle/Tittle"

function Selling() {


  tittle("Spectrum | Selling")
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
                  <input type="text" placeholder="Name of goods *" />
                </div>
                <div className={styles["desc-good"]}>
                  <textarea type="text" placeholder="Description Product *" />
                </div>
              </form>
            </div>
            <div className={styles["item-detail"]}>
              <div className={styles["title"]}>
                <h1>Item Details</h1>
              </div>
              <form action="">
                <div className={styles["unit-price"]}>
                  <input type="text" placeholder="Unit price *" />
                </div>
                <div className={styles["unit-stock"]}>
                  <input type="number" placeholder="Unit Stock *" min="0" />
                </div>
              </form>
            </div>
            <div className={styles["product-condition"]}>
              <div className={styles["title"]}>
                <h1>Stock Condition</h1>
              </div>
              <div className={styles["radio"]}>
                <div className={styles["form"]}>
                  <input type="radio" name="condition" />
                  <label htmlFor="">New Product</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="condition" />
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
                  <input type="radio" name="brands" />
                  <label htmlFor="">IKEA</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="brands" />
                  <label htmlFor="">Informa</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="brands" />
                  <label htmlFor="">North Oxford</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="brands" />
                  <label htmlFor="">Sweet House</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="brands" />
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
                  <input type="radio" name="color" />
                  <label htmlFor="">Luxor Gold</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="color" />
                  <label htmlFor="">Ship Cove</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="color" />
                  <label htmlFor="">Armadillo</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="color" />
                  <label htmlFor="">East Bay</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="color" />
                  <label htmlFor="">Hippe Green</label>
                </div>
                <div className={styles["form"]}>
                  <input type="radio" name="color" />
                  <label htmlFor="">Fuel Yellow</label>
                </div>
              </div>
            </div>
            <div className={styles["category"]}>
              <div className={styles["title"]}>
                <h1>Category</h1>
              </div>
              <div className={styles["radio"]}>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Accesories</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Brands</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Clothing</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Fashion</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Men</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Woman</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Shoes</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Wallets</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Futniture</label>
                </div>
                <div className={styles["form"]}>
                  <input type="checkbox" />
                  <label htmlFor="">Sofa</label>
                </div>
              </div>
            </div>
            <div className={styles["photo-good"]}>
              <div className={styles["title"]}>
                <h1>Photo of Goods</h1>
              </div>
              <div className={styles["add-photo"]}>
                <i className="fa-solid fa-plus"></i>
                <p>Add more image</p>
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

import React from 'react'
import { Link } from 'react-router-dom'


// import css
import css from "./Productdetail.module.css"

// import components
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

// import image
import list_product_1 from '../../asset/productdetail/product-1.png'
import list_product_2 from '../../asset/productdetail/product-2.png'
import list_product_3 from '../../asset/productdetail/product-3.png'
import hot_label from '../../asset/productdetail/hot_lable.png'


function Productdetail() {
    return (
        <>
            <>
                <Header />

                {/* Breadcrumb */}
                <div className={`container-fluid ${css['content-bar']}`}>
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
                    <div className="row d-flex justify-content-between">
                        <div className={`col-lg-3 col-md-12 ${css.list_product}`}>
                            <img src={list_product_1} alt="list_product_1" />
                            <img src={list_product_1} alt="list_product_1" />
                            <img src={list_product_1} alt="list_product_1" />
                            <img src={list_product_1} alt="list_product" />
                        </div>
                        <div className={`col-lg-9 col-md-12 ${css.product_preview}`}>
                            <img src={list_product_2} alt="list_product" className={`${css.preview}`} />
                            <img src={hot_label} alt="list_product" className={`${css.hot}`} />
                        </div>
                    </div>
                </div>


                {/* detail product */}
                <div className="container">
                    <p className={`${css.detail_title}`}>Coaster Home Furnishings Sofa in Oatmeal</p>
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
                        <span className={`${css.detail_price_stock}`}>19 Sold / 40 In Stock</span>
                    </div>
                    <div className={`${css.detail_desc}`}>
                        <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit. Proin dui lacus, viverra at imperdiet non, facilisis eget orci. Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam eu, pretium finibus libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae neque tellus.</p>
                    </div>

                    <div className={`d-flex flex-row ${css.detail_submit}`}>
                        {/* button + or - product */}
                        <div className={`d-flex align-items-center ${css['add-product']}`}>
                            <button><i class="fa-solid fa-minus"></i></button>
                            <input type="text" value="01" />
                            <button><i className="fa-solid fa-plus"></i></button>
                        </div>
                        {/* add to cart */}
                        <div className={`${css.add_cart}`}>
                            <button>Add to cart</button>
                        </div>
                        {/* add favorite */}
                        <div className={`${css.favorite}`}>
                            <button><i className="fa-regular fa-heart"></i></button>
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


                <div className="container d-flex flex-row">
                    <div className={`d-flex flex-row align-items-center ${css.location}`}>
                        <i className="fa-solid fa-truck"></i>
                        <p>Delivery and return</p>
                    </div>
                    <div className={`d-flex flex-row align-items-center ${css.location}`}>
                        <i className="fa-solid fa-ruler-horizontal"></i>
                        <p>Size guides</p>
                    </div>
                    <div className={`d-flex flex-row align-items-center ${css.location}`}>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Store availability</p>
                    </div>
                </div>

                <div className={`container ${css.sosial_media}`}>
                    <div className={`d-flex flex-row justify-content-start ${css["icon-style"]}`}>
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
                <div className="container d-flex justify-content-center">
                    <div className={`d-flex justify-content-center ${css['bar-product-detail']}`}>
                        <p>Description</p>
                        <p>Review</p>
                        <p>Additional Information</p>
                        <p>About Brand</p>
                        <p>Shipping & Delivery</p>
                    </div>
                </div>

                <div className="container">
                    <div className={`row d-flex justify-content-center ${css['content-bar-description']}`}>
                        <div className={`col-lg-5 col-md-12 col-sm-12 ${css['image-description']}`}>
                            <img src={list_product_2} alt="product_image" />
                        </div>
                        <div className={`col-lg-7 col-md-12 col-sm-12 ${css['image-description_1']}`}>
                            <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                            <ul className={`${css.style_li}`}>
                                <li>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</li>
                                <li>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                            </ul>
                            <p>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accum</p>
                        </div>
                    </div>
                    <p className={`${css.relate}`}>Related Products</p>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
                            <img src={list_product_3} alt="product" />
                            <p className={`${css.type}`}>Coaster 506222-CO Loveseat</p>
                            <p className={`${css.type_price}`}>$765.99</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
                            <img src={list_product_3} alt="product" />
                            <p className={`${css.type}`}>Coaster 506222-CO Loveseat</p>
                            <p className={`${css.type_price}`}>$765.99</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
                            <img src={list_product_3} alt="product" />
                            <p className={`${css.type}`}>Coaster 506222-CO Loveseat</p>
                            <p className={`${css.type_price}`}>$765.99</p>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center ${css['circle']}`}>
                        <i class="fa-solid fa-circle"></i>
                        <i class="fa-regular fa-circle"></i>
                        <i class="fa-regular fa-circle"></i>
                    </div>
                </div>


                {/* footer */}
                <Footer />
            </>
        </>
    )
}

export default Productdetail;

import React from 'react'


import css from "./CardHome.module.css"

// import image
import product_one from "../../asset/bg-home/product_home.png"

function CardHome() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-lg-6 col-md-12 col-sm-12 ${css["list-product-home-right"]}`}>
                        <img src={product_one} alt="Image_Product" width="100%" height="640px" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className={`${css["home-name-product"]}`}>Mid-Century 1929 Sofa with Pilow</p>
                        <p className={`${css["home-desc-product"]}`}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                    </div>
                </div>
                <div className="row d-flex flex-row-reverse">
                    <div className={`col-lg-6 col-md-12 col-sm-12 ${css["list-product-home-left"]}`}>
                        <img src={product_one} alt="Image_Product" width="100%" height="640px" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className={`${css["home-name-product"]}`}>Mid-Century 1929 Sofa with Pilow</p>
                        <p className={`${css["home-desc-product"]}`}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardHome
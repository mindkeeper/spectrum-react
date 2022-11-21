import React from 'react'

import css from './Wishlist.module.css'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import tittle from "../../components/title/Title"
import CardWishlist from '../../components/cardWishlist/CardWishlist'


function Wishlist() {

    tittle("Spectrum | Wishlist")
    return (
        <>
            <Header />

            {/* Title Bar Cart */}
            <div className={`container-fluid ${css['blog-top']}`}>
                <div className={`container ${css['link-bar']}`}>
                    <p>Wishlist <i className="fa-solid fa-angle-right"></i></p>
                    <p></p>
                </div>
                <div className={`${css['our-blog']}`}>
                    <p className={`${css['our-blog-1']}`}>Wishlist</p>
                    <p className={`${css['our-blog-2']}`}>Pay and get your ordered items</p>
                </div>
            </div>

            {/* Content wishlist */}
            <div className={`container ${css["content-box"]}`}>
                {/* Navbar */}
                <div className={css.content_bar}>
                    <p className={css.content_bar1}>Product</p>
                    <p className={css.content_bar2}>Stock Status</p>
                    <p className={css.content_bar3}>Price</p>
                </div>

                {/* Component wishlist */}
                <CardWishlist />
                <CardWishlist />


            </div>




            <Footer />
        </>
    )
}

export default Wishlist
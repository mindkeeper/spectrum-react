import React from 'react'

import css from "./CardWishlist.module.css"
import product_image from "../../asset/wishlist/product_image.png"

function CardWishlist() {
    return (
        <>
            <div className={css.content_component}>
                <div className={css.component}>
                    <img src={product_image} alt="Img_product" className={css.product_preview} />
                    <p className={css.name_product}>Dining Side Chair in Beige</p>
                    <div className={css.stock}>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">In Stock</label>
                    </div>
                    <p className={css.price}>$765.99</p>
                    <button className={css.addcart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default CardWishlist
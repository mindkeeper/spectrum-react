import React from 'react'

import css from './CardCartDetail.module.css'
import img_chair from '../../asset/cart/img_chair.png'

function CardCartDetail() {
    return (
        <>
            <div className={css.product_cart}>
                <i className={`fa-regular fa-circle-xmark ${css.silang}`}></i>
                <img src={img_chair} alt="Image_Product" className={css.image_preview} />
                <p className={css.name_product}>Fabrica Mid Century Chair</p>
                <p className={css.price_product}>$ 12.50</p>
                {/* button + or - product */}
                <div className={` ${css['add-product']}`}>
                    <button><i className="fa-solid fa-minus"></i></button>
                    <input type="text" value="01" />
                    <button><i className="fa-solid fa-plus"></i></button>
                </div>
                <p className={css.price_product1}>$ 12.50</p>
            </div>
        </>
    )
}

export default CardCartDetail
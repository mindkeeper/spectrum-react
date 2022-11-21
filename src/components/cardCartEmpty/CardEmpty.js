import React from 'react'

import css from "./CardEmpty.module.css"

function CardEmpty() {
    return (
        <>
            <div className={`container d-flex flex-column align-items-center my-5`}>
                <i className="fa-solid fa-cart-plus fs-1"></i>
                <p className={css.empety}>Your cart is empety</p>
                <p className={css.empety_desc}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. urabitur blandit ultri</p>
            </div>

        </>
    )
}

export default CardEmpty
import React from 'react'


// import CSS
import css from "./CardHeaderProfile.module.css"

function CardHeaderProfile() {
    return (
        <>
            <div className="container-fluid">
                <div className={`container py-5 ${css['box']}`}>
                    <div className="row d-flex flex-row align-items-center justify-content-start">
                        <div className={`col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-one"]}`}>
                            <span>Profile</span>
                        </div>
                        <div className={`col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-two"]}`}>
                            <span>My Product<i class="fa-solid fa-chevron-down fs-6 ms-3"></i></span>
                        </div>
                        <div className={`col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-three"]}`}>
                            <span>Selling Product</span>
                        </div>
                        <div className={`col-lg-2 col-md-3 col-sm-12 d-flex justify-content-center ${css["header-profile-four"]}`}>
                            <span>My Order<i class="fa-solid fa-chevron-down fs-6 ms-3"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CardHeaderProfile
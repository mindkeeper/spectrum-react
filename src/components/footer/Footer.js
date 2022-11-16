import React from 'react'


// Import CSS
import css from "./Footer.module.css"

// import image
import logo from "../../asset/logo/logo-black.png";


function Footer() {
    return (
        <>
            <footer>
                <div className={`container-fluid ${css["background-footer"]}`}>
                    {/* Footer Top */}
                    <div className={css['footer-content']}>
                        <div className='row d-flex justify-content-center'>
                            {/* Content RAZ */}
                            <div className={`col-lg-3 col-md-12 d-flex flex-column align-items-start ${css["content-one"]}`}>

                                <p className={`${css["raz-title"]}`}><img src={logo} alt="" width="50px" /> SPECTRUM</p>
                                <p className={`${css["raz-desc"]}`}>Donec nunc nunc, gravida vitae diam vel,<br /> varius interdum erat. Quisque a nunc vel <br /> diam auctor commodo.</p>
                                <div className={`d-flex flex-row justify-content-start ${css["icon-style"]}`}>
                                    <span className={`${css["facebook-container"]}`}><i className="fa-brands fa-facebook-f text-white"></i></span>
                                    <span><i className="fa-brands fa-twitter text-white"></i></span>
                                    <span><i className="fa-brands fa-youtube text-white"></i></span>
                                    <span><i className="fa-solid fa-basketball text-white"></i></span>
                                </div>
                            </div>

                            {/* Content Company */}
                            <div className={`col-lg-3 col-md-6 d-flex flex-column align-items-center ${css["content-two"]}`}>
                                <p className={`${css['content-company-title']}`}>Company</p>
                                <div className={`${css['content-company-desc']}`}>
                                    <p>ABOUT US</p>
                                    <p>HELP CENTER</p>
                                    <p>LICENSES</p>
                                    <p>MARKET API</p>
                                    <p>SITE MAP</p>
                                </div>
                            </div>

                            {/* Content Userful */}
                            <div className={`col-lg-3 col-md-6 d-flex flex-column align-items-center ${css["content-third"]}`}>
                                <p className={`${css['content-userful-title']}`}>USERFUL</p>
                                <div className={`${css['content-userful-desc']}`}>
                                    <p>THE COLLECTIONS</p>
                                    <p>SIZE GUIDE</p>
                                    <p>LOOKBOOK</p>
                                    <p>INSTAGRAM SHOP</p>
                                </div>
                            </div>


                            {/* Content Contact US */}
                            <div className={`col-lg-3 col-md-6 d-flex flex-column align-items-center ${css["content-four"]}`}>
                                <p className={`${css['content-contact-title']}`}>CONTACT US</p>
                                <div className={`${css['content-contact-desc']} d-flex flex-column`}>
                                    <span className={`${css['icon-right']} d-flex w-100 align-items-center mt-2`}>
                                        <i className="fa-regular fa-envelope" />
                                        <span className={`${css["info"]}`}>info@la-studioweb.com</span>
                                    </span>
                                    <span className={`${css['icon-right']} d-flex w-100 align-items-center mt-4`}>
                                        <i className="fa-solid fa-phone-volume" />
                                        <span className={`${css["info"]}`}>+44.954.954.86</span>
                                    </span>
                                    <span className={`${css['icon-right']} d-flex w-100 align-items-center mt-4`}>
                                        <i className="fa-sharp fa-solid fa-clock" />
                                        <span className={`${css["info"]}`}>9:00am - 19:00pm<br />Monday - Sunday</span>
                                    </span>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer Bottom */}
                    <div>
                        <p className={`w-100 pt-5 pb-2 text-center ${css["copyright"]}`}>© 2019 RAZ Store All rights reserved</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer

import React from 'react'

// import CSS
import css from "./ProfileCustomer.module.css"

// import image
import imageProfile from '../../../asset/logo/logo-black.png'
import pencil from '../../../asset/profile/pencil.png'

// import component
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

export default function ProfileCustomer() {
    return (
        <>
            {/* Header */}
            <div className="py-4">
                <Header />
            </div>

            {/* Content Profile Tittle*/}
            <div className={`container-fluid ${css['background-profile-customer']}`}>
                <div className={`d-flex flex-column align-items-center ${css['tittle-content']}`}>
                    <p className={`${css['profile-tittle-one']}`}>Profile</p>
                    <p className={`${css['profile-tittle-two']}`}>See your notifications for the latest updates</p>
                </div>
            </div>


            {/* Form Data Profile */}
            <form className="container pt-5">
                <div className="d-flex flex-row">
                    <label htmlFor="profile-image">
                        <img src={imageProfile} alt="Profile" width='50px' height='50px' className='rounded-circle' />
                        <input type="file" name='file' id="profile-image" className='d-none' />
                    </label>
                    <div className="ms-4">
                        <p className={css["saller-name"]}>Syifa</p>
                        <p className={css["saller-role"]}>as Customer</p>
                    </div>
                    <div className={css["edit-pencil"]}>
                        <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                    </div>
                </div>

                {/* Data Profile */}
                <div className="mt-4">
                    <div className="d-flex flex-row justify-content-between p-5 border">
                        <div className="d-flex flex-column">
                            <label className={`${css["label-profile"]} mb-3`}>Gender</label>
                            <input className={css["input-profile"]} type="text" placeholder='Input gender' />
                        </div>
                        <div className="mt-4">
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-5 border">
                        <div className="d-flex flex-column">
                            <label className={`${css["label-profile"]} mb-3`}>Your Email</label>
                            <input className={css["input-profile"]} type="text" placeholder='Input your email address' />
                        </div>
                        <div className="mt-4">
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-5 border">
                        <div className="d-flex flex-column">
                            <label className={`${css["label-profile"]} mb-3`}>Store Description</label>
                            <input className={css["input-profile"]} type="textarea" placeholder='Input store description' />
                        </div>
                        <div className="mt-4">
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="d-flex flex-row justify-content-between">
                    <div className="my-4 mx-2">
                        <button className={css['logout']}><i class="fa-solid fa-right-from-bracket text-white me-4" />Logout</button>
                    </div>
                    <div className="my-4 mx-2">
                        <button className={`bg-dark ${css['save-change']}`}>Save Change</button>
                    </div>
                </div>

            </form>

            {/* Footer */}
            <Footer />
        </>
    )
}

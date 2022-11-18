import React from 'react'

// import CSS
import css from "./ProfileSeller.module.css"

// import image
import imageProfile from '../../../asset/logo/logo-black.png'
import pencil from '../../../asset/profile/pencil.png'

// import component
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import CardHeaderProfile from '../../../components/card-header-profile/CardHeaderProfile'

function ProfileSeller() {
    return (
        <>
            {/* Header */}
            <Header />


            {/* Content Profile Tittle*/}
            <div className={`container-fluid ${css['background-profile-customer']}`}>
                <div className={`d-flex flex-column align-items-center ${css['tittle-content']}`}>
                    <p className={`${css['profile-tittle-one']}`}>Profile</p>
                    <p className={`${css['profile-tittle-two']}`}>See your notifications for the latest updates</p>
                </div>
            </div>

            {/* Navbar Profile */}
            <CardHeaderProfile />

            {/* Form Data Profile */}
            <form className="container pt-4">
                <div className="d-flex flex-row">
                    <label htmlFor="profile-image">
                        <img src={imageProfile} alt="Profile" width='50px' height='50px' className='rounded-circle' />
                        <input type="file" name='file' id="profile-image" className='d-none' />
                    </label>
                    <div className="ms-4">
                        <p className={css["saller-name"]}>Syifa</p>
                        <p className={css["saller-role"]}>as Seller</p>
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
                            <label className={`${css["label-profile"]} mb-3`}>Store Name</label>
                            <input className={css["input-profile"]} type="text" placeholder='Input store name' />
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
                {/* Action Button */}
                <div className={`d-flex flex-row justify-content-between ${css['submit-form']}`}>
                    <button className={css['logout']}><i class="fa-solid fa-right-from-bracket text-white me-4" />Logout</button>
                    <button className={`bg-dark ${css['save-change']}`}>Save Change</button>
                </div>

            </form>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default ProfileSeller
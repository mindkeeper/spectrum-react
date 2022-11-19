import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// import CSS
import css from "./ProfileSeller.module.css"

// import image
import pencil from '../../../asset/profile/pencil.png'
import imageProfile from '../../../asset/profile/pic_default.png'

// import component
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import CardHeaderProfile from '../../../components/card-header-profile/CardHeaderProfile'
import profileActions from '../../../redux/actions/profile';


function ProfileSeller() {
    const dispacth = useDispatch();
    const profile = useSelector((state) => state.data_profile.profile)
    const token = useSelector((state) => state.auth.userInfo.token);

    useEffect(() => {
        dispacth(profileActions.getProfileThunk(token))
    }, [dispacth])



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
                        <img src={profile.image || imageProfile} alt="Profile" width='50px' height='50px' className='rounded-circle' />
                        <input type="file" name='file' id="profile-image" className='d-none' />
                    </label>
                    <div className="ms-4">
                        <input type="text" value={profile.display_name} className={css["saller-name"]} />
                        <p className={css["saller-role"]}>as {profile.role}</p>
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
                            <input className={css["input-profile"]}
                                type="text"
                                value={profile.gender}
                                placeholder='Input gender' />
                        </div>
                        <div className="mt-4">
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-5 border">
                        <div className="d-flex flex-column">
                            <label className={`${css["label-profile"]} mb-3`}>Your Email</label>
                            <input className={css["input-profile"]}
                                type="text"
                                value={profile.email}
                                placeholder='Input your email address' />
                        </div>
                        <div className="mt-4">
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-5 border">
                        <div className="d-flex flex-column">
                            <label className={`${css["label-profile"]} mb-3`}>Store Name</label>
                            <input className={css["input-profile"]}
                                type="text"
                                value={profile.store_name}
                                placeholder='Input store name' />
                        </div>
                        <div className="mt-4">
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-5 border">
                        <div className="d-flex flex-column">
                            <label className={`${css["label-profile"]} mb-3`}>Store Description</label>
                            <input className={css["input-profile"]}
                                type="textarea"
                                value={profile.store_desc}
                                placeholder='Input store description' />
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
                    <button className={css['logout']}><i className="fa-solid fa-right-from-bracket text-white me-4" />Logout</button>
                    <button className={`bg-dark ${css['save-change']}`}>Save Change</button>
                </div>

            </form>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default ProfileSeller
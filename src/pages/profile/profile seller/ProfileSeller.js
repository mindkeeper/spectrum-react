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
            <div className="container-fluid">
                <div className="row">
                    <main className={`col-lg-12 ${css["page-title"]}`}>
                        <h1>Profile</h1>
                        <p>
                            See your notifications for the latest updates
                        </p>
                    </main>
                </div>
            </div>
            {/* Navbar Profile */}
            <CardHeaderProfile />

            {/* Form Data Profile */}
            <form className={`container ${css.top_1}`}>
                <div className={css.data_form}>
                    <label htmlFor="profile-image">
                        <img src={profile.image || imageProfile} alt="Profile" width='50px' height='50px' className='rounded-circle' />
                        <input type="file" name='file' id="profile-image" className='d-none' />
                    </label>
                    <div className={css.top_2}>
                        <input type="text"
                            name="display_name"
                            className={css["saller-name"]}
                            defaultValue={profile.display_name}
                        // onChange={changeHandler}
                        />
                        <p className={css["saller-role"]}>as {profile.role}</p>
                    </div>
                    <div className={css["edit-pencil"]}>
                        <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                    </div>
                </div>

                {/* Data Profile */}
                <div className={css.top_content}>
                    <div className={css.box_size_form}>
                        <div className={css.box_size_form_1}>
                            <label className={`${css["label-profile"]} mb-3`}>Gender</label>
                            <input className={css["input-profile"]}
                                type="text"
                                name='gender'
                                defaultValue={profile.gender}
                                // onChange={changeHandler}
                                placeholder='Input gender' />
                        </div>
                        <div className={css.top_content}>
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className={css.box_size_form}>
                        <div className={css.box_size_form_1}>
                            <label className={`${css["label-profile"]} mb-3`}>Your Email</label>
                            <input className={css["input-profile"]}
                                type="text"
                                name='email'
                                defaultValue={profile.email}
                                // onChange={changeHandler}
                                placeholder='Input your email address' />
                        </div>
                        <div className={css.top_content}>
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className={css.box_size_form}>
                        <div className={css.box_size_form_1}>
                            <label className={`${css["label-profile"]} mb-3`}>Store name</label>
                            <input className={css["input-profile"]}
                                type="textarea"
                                name='store_desc'
                                defaultValue={profile.store_name}
                                // onChange={changeHandler}
                                placeholder='Input store description' />
                        </div>
                        <div className={css.top_content}>
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                    <div className={css.box_size_form}>
                        <div className={css.box_size_form_1}>
                            <label className={`${css["label-profile"]} mb-3`}>Store Description</label>
                            <input className={css["input-profile"]}
                                type="textarea"
                                name='store_desc'
                                defaultValue={profile.store_desc}
                                // onChange={changeHandler}
                                placeholder='Input store description' />
                        </div>
                        <div className={css.top_content}>
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className={`${css['submit-form']}`}>
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
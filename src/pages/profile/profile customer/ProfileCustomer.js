import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import profileActions from '../../../redux/actions/profile'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import CSS
import css from "./ProfileCustomer.module.css"

// import image
import imageProfile from '../../../asset/profile/pic_default.png'
import pencil from '../../../asset/profile/pencil.png'

// import component
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

export default function ProfileCustomer() {
    const dispacth = useDispatch();
    const [body, setBody] = useState({});
    const profile = useSelector((state) => state.data_profile.profile)
    const token = useSelector((state) => state.auth.userInfo.token);

    const changeHandler = (e) =>
        setBody({ ...body, [e.target.name]: e.target.value });
    console.log(body);

    const submitEditProfile = (e) => {
        e.preventDefault()
        dispacth(profileActions.editProfileThunk(body, token));
        return toast.success(`Congrats! data success change`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

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


            {/* Form Data Profile */}
            <form className="container pt-5">
                <div className="d-flex flex-row">
                    <label htmlFor="profile-image">
                        <img src={profile.image || imageProfile} alt="Profile" width='50px' height='50px' className='rounded-circle' />
                        <input type="file" name='file' id="profile-image" className='d-none' />
                    </label>
                    <div className="ms-4">
                        <input type="text"
                            name="display_name"
                            className={css["saller-name"]}
                            defaultValue={profile.display_name}
                            onChange={changeHandler}
                        />
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
                                name='gender'
                                defaultValue={profile.gender}
                                onChange={changeHandler}
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
                                name='email'
                                defaultValue={profile.email}
                                onChange={changeHandler}
                                placeholder='Input your email address' />
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
                                name='store_desc'
                                defaultValue={profile.store_desc}
                                onChange={changeHandler}
                                placeholder='Input store description' />
                        </div>
                        <div className="mt-4">
                            <span className={css['edit-profile']}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className={`d-flex flex-row justify-content-between ${css['submit-form']}`}>
                    <button className={css['logout']}><i class="fa-solid fa-right-from-bracket text-white me-4" />Logout</button>
                    <button className={`bg-dark ${css['save-change']}`} onClick={submitEditProfile}>Save Change</button>
                </div>

            </form>
            <ToastContainer />
            {/* Footer */}
            <Footer />
        </>
    )
}

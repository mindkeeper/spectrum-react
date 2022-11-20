import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// import CSS
import css from "./ProfileSeller.module.css"

// import image
import pencil from '../../../asset/profile/pencil.png'
// import imageProfile from '../../../asset/profile/pic_default.png'

// import component
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import CardHeaderProfile from '../../../components/card-header-profile/CardHeaderProfile'
import profileActions from '../../../redux/actions/profile';
import axios from 'axios';


function ProfileSeller() {
    const dispacth = useDispatch();
    const profile = useSelector((state) => state.data_profile.profile)
    const token = useSelector((state) => state.auth.userInfo.token);
    // https://res.cloudinary.com/dx7cvqczn/image/upload/v1667811029/coffee_addict/pic_default.png
    const [email, setEmail] = useState(profile.email);
    const [role, setRole] = useState(profile.role);
    const [display_name, setDisplay_name] = useState(profile.display_name);
    const [gender, setGender] = useState(profile.gender);
    const [image, setImage] = useState(profile.image);
    const [display, setDisplay] = useState(profile.image);
    const [store_name, setStore_name] = useState(profile.store_name);
    const [store_desc, setStore_desc] = useState(profile.store_desc);

    useEffect(() => {
        dispacth(profileActions.getProfileThunk(token));
        setEmail(profile.email);
        setDisplay_name(profile.display_name);
        setGender(profile.gender);
        setImage(profile.image);
        setStore_name(profile.store_name);
        setStore_desc(profile.store_desc);
    }, [dispacth])


    // const submitUpdateProfile = async (e) => {
    //     try {
    //         e.preventDefault();
    //         let formData = new FormData();
    //         // let bodyFromDataUser = null;
    //         if (display_name) formData.append("display_name", display_name);
    //         for (var pair of formData.entries()) {
    //             console.log(pair[0] + " - " + pair[1]);
    //         }
    //         // console.log(formData);
    //         if (formData) {
    //             await dispacth(profileActions.editProfileThunk(formData));
    //             await dispacth(profileActions.getProfileThunk(token));
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const submitUpdateProfile = async (e) => {
        try {
            e.preventDefault();
            console.log(image)
            console.log(display)
            let formData = new FormData();
            if (display_name) formData.append("display_name", display_name);
            if (image !== display) formData.append("image", image);
            if (email) formData.append("email", email);
            if (store_name) formData.append("store_name", store_name);
            if (store_desc) formData.append("store_desc", store_desc);
            if (gender) formData.append("gender", gender);
            for (var pair of formData.entries()) {
                console.log(pair[0] + " - " + pair[1]);
            }
            // console.log(formData);
            if (formData) {
                await dispacth(profileActions.editProfileThunk(formData));
                await dispacth(profileActions.getProfileThunk(token));
            }
        } catch (error) {
            console.log(error);
        }
    }
    // const submitUpdateProfile = (e) => {
    //     e.preventDefault()
    //     const getToken = JSON.parse(localStorage["token"]);
    //     const url = `${process.env.REACT_APP_BACKEND_HOST}/users/profile/edit`;

    //     let formData = new FormData();

    //     // if (display_name) formData.append("display_name", display_name);
    //     // if (email) formData.append("email", email);
    //     console.log(image);
    //     if (image) formData.append("image", image);
    //     // if (gender) formData.append("gender", gender);
    //     // if (store_name) formData.append("store_name", store_name);
    //     // if (store_desc) formData.append("store_desc", store_desc);

    //     axios
    //         .patch(url, formData, {
    //             headers: {
    //                 "x-access-token": getToken,
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         })
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //         .catch((err) => console.log(err));
    // }

    const inputImage = (event) => {
        // console.log(image);
        if (event.target.files && event.target.files[0]) {
            setDisplay(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
            // console.log("check setimage:", image);
        }
    };


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
                        <img src={display} alt="Profile" width='50px' height='50px' className='rounded-circle' />
                        <input
                            type="file"
                            name='file'
                            id="profile-image"
                            onChange={inputImage}
                            className='d-none' />
                    </label>
                    <div className={css.top_2}>
                        <input type="text"
                            name="display_name"
                            className={css["saller-name"]}
                            value={display_name}
                            onChange={(e) => {
                                setDisplay_name(e.target.value);
                                console.log(display_name);
                            }}
                        />
                        <p className={css["saller-role"]}>as {role}</p>
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
                                value={gender}
                                onChange={(e) => {
                                    setGender(e.target.value);
                                    console.log(gender);
                                }}
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
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    console.log(email);
                                }}
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
                                value={store_name}
                                onChange={(e) => {
                                    setStore_name(e.target.value);
                                    console.log(store_name);
                                }}
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
                                value={store_desc}
                                onChange={(e) => {
                                    setStore_desc(e.target.value);
                                    console.log(store_desc);
                                }}
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
                    <button className={`bg-dark ${css['save-change']}`} onClick={submitUpdateProfile}>Save Change</button>
                </div>

            </form>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default ProfileSeller
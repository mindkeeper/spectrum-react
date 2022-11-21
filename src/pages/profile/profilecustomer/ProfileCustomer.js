import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import actions
import profileActions from '../../../redux/actions/profile'
import authActions from "../../../redux/actions/auths";

// import toast notifikasi
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import CSS
import css from "./ProfileCustomer.module.css"

// import image
import pencil from '../../../asset/profile/pencil.png'

// import component
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'

// import bootstraps
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'



export default function ProfileCustomer() {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector((state) => state.data_profile.profile)
    const token = useSelector((state) => state.auth.userInfo.token);
    console.log(token);

    const [email, setEmail] = useState(profile.email);
    const [role, setRole] = useState(profile.role);
    const [display_name, setDisplay_name] = useState(profile.display_name);
    const [gender, setGender] = useState(profile.gender);
    const [image, setImage] = useState(profile.image);
    const [display, setDisplay] = useState(profile.image);
    const [store_desc, setStore_desc] = useState(profile.store_desc);
    const [showmodals, setShowmodals] = useState(false);
    const [showEdit, setShowEdit] = useState(false)
    const [edit_display, setEdit_display] = useState(true)
    const [edit_gender, setEdit_gender] = useState(true)
    const [edit_store_desc, setEdit_store_desc] = useState(true)
    const [passwords, setPasswords] = useState('')
    const [new_passwords, setNew_Passwords] = useState('')
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [type_, setType_] = useState('password');
    const [icon_, setIcon_] = useState(eyeOff);


    // ComponentDidMount
    useEffect(() => {
        dispacth(profileActions.getProfileThunk(token));
        setEmail(profile.email);
        setDisplay_name(profile.display_name);
        setGender(profile.gender);
        setImage(profile.image);
        setStore_desc(profile.store_desc);
    }, [dispacth])


    // handleToggle => Show password new password
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password')
        }
    }

    // handleToggle => Show password old password
    const handleToggleOld = () => {
        if (type_ === 'password') {
            setIcon_(eye);
            setType_('text');
        } else {
            setIcon_(eyeOff);
            setType_('password')
        }
    }

    // editPassword => untuk edit password
    const editPassword = (e) => {
        e.preventDefault()
        axios.patch(`${process.env.REACT_APP_BACKEND_HOST}/users/editpwd`, {
            new_password: new_passwords,
            old_password: passwords,
        }, {
            headers: {
                "x-access-token": token
            }
        })
            .then(toast.success(`Edit Password Success`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }), setShowEdit(false))
            .catch((err) =>
                toast.error((err), {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            )
    }

    // submitUpdateProfile => edit profile
    const submitUpdateProfile = async (e) => {
        try {
            e.preventDefault();
            console.log(image)
            console.log(display)
            let formData = new FormData();
            if (display_name) formData.append("display_name", display_name);
            if (gender) formData.append("gender", gender);
            if (image !== display) formData.append("image", image);
            if (store_desc) formData.append("store_desc", store_desc);
            for (var pair of formData.entries()) {
                console.log(pair[0] + " - " + pair[1]);
            }
            // console.log(formData);
            if (formData) {
                dispacth(profileActions.editProfileThunk(formData, token));
                dispacth(profileActions.getProfileThunk(token));
                setEdit_display(true)
                setEdit_gender(true)
                setEdit_store_desc(true)
                toast.success(`Congrats! Data success change`, {
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
        } catch (error) {
            toast.error((error), {
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
    }



    // inputImage => preview image
    const inputImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setDisplay(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    };

    // toLogin => navigate ke halaman login && logoutHandler => logout
    const toLogin = () => navigate("/login");
    const logoutHandler = () => {
        dispacth(authActions.logoutThunk(token, toLogin));
        localStorage.removeItem("token");
    };


    // show modals
    const handleClose = () => setShowmodals(false);
    const handleShow = () => setShowmodals(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    // disable to edit
    const isEditdisplay = () => setEdit_display(false)
    const isEditgender = () => setEdit_gender(false)
    const isEditstore_desc = () => setEdit_store_desc(false)


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


            {/* Form Data Profile */}
            <form className={`container ${css.top_1}`}>
                <div className={css.data_form}>
                    <label htmlFor="profile-image">
                        <img src={display || "https://res.cloudinary.com/dx7cvqczn/image/upload/v1667811029/coffee_addict/pic_default.png"} alt="Profile" width='50px' height='50px' className='rounded-circle' />
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
                            value={(display_name === null) ? "Displayname" : display_name}
                            disabled={edit_display}
                            onChange={(e) => {
                                setDisplay_name(e.target.value);
                                console.log(display_name);
                            }}
                        />
                        <p className={css["saller-role"]}>as {role}</p>
                    </div>
                    <div className={css["edit-pencil"]} onClick={(e) => {
                        e.preventDefault()
                        isEditdisplay()
                    }}>
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
                                disabled={edit_gender}
                                onChange={(e) => {
                                    setGender(e.target.value);
                                    console.log(gender);
                                }}
                                placeholder='Input gender' />
                        </div>
                        <div className={css.top_content}>
                            <span className={css['edit-profile']} onClick={(e) => {
                                e.preventDefault()
                                isEditgender()
                            }}>Edit</span>
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
                                disabled
                                placeholder='Input your email address' />
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
                                disabled={edit_store_desc}
                                onChange={(e) => {
                                    setStore_desc(e.target.value);
                                    console.log(store_desc);
                                }}
                                placeholder='Input store description' />
                        </div>
                        <div className={css.top_content}>
                            <span className={css['edit-profile']} onClick={(e) => {
                                e.preventDefault()
                                isEditstore_desc()
                            }}>Edit</span>
                            <img src={pencil} alt="Pencil" width="15px" height="15px" className='ms-3' />
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className={`${css['submit-form']}`}>
                    <div className="">
                        <button className={css['logout']} onClick={(e) => {
                            e.preventDefault();
                            handleShow();
                        }}><i className="fa-solid fa-right-from-bracket text-white me-4" />Logout</button>
                        <button className={css['edit-password']} onClick={(e) => {
                            e.preventDefault()
                            handleShowEdit()
                        }}>Edit Password</button>
                    </div>
                    <button className={`bg-dark ${css['save-change']}`} onClick={submitUpdateProfile}>Save Change</button>
                </div>

            </form>
            <ToastContainer />
            {/* Footer */}
            <Footer />
            <Modal show={showmodals} onHide={handleClose}
            // backdrop="static"
            // keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>are you sure you want to log out?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="dark"
                        className="fw-bold text-bg-dark text-white"
                        onClick={logoutHandler}
                    >
                        Yes
                    </Button>
                    <Button
                        variant="danger"
                        className="fw-bold text-bg-danger text-white"
                        onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Modal Edit Password */}
            <Modal show={showEdit} onHide={handleCloseEdit}
            // backdrop="static"
            // keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Passwords</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={css.edit_pwd_box}>
                        <div className={css.old_pwd}>
                            <label htmlFor="">Old Password *</label>
                            <input
                                type={type}
                                name='password'
                                value={passwords}
                                onChange={(e) => {
                                    setPasswords(e.target.value)
                                    console.log(passwords);
                                }} />
                            <Icon icon={icon} onClick={handleToggle} />
                        </div>
                        <div className={css.old_pwd1}>
                            <label htmlFor="">New Password *</label>
                            <input type={type_}
                                name='new_password'
                                value={new_passwords}
                                onChange={(e) => {
                                    setNew_Passwords(e.target.value)
                                    console.log(new_passwords);
                                }} />
                            <Icon icon={icon_} onClick={handleToggleOld} />
                        </div>
                    </div>

                    <button className={css.save_edit} onClick={editPassword}>Save</button>
                    <button className={css.cancel_edit} onClick={handleCloseEdit}>Cancel</button>
                </Modal.Body>
            </Modal>
        </>
    )
}

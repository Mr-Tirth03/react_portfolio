import React from 'react';
import img1 from '../Images/My_Photo.jpg'
import Typewriter from 'typewriter-effect'
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();



function Home() {
    
    const pageVariants = {
        initial: {
            opacity: 0,
            x: "-100vw",
            // scale: 0.8
        },
        in: {
            opacity: 1,
            x: 0,
            // scale: 1
        },
        out: {
            // opacity: 0,
            x: "100vw",
            // scale: 1.2
        }
    }

    const pageTransition = {
        transition: "linear",
        duration: 1
    }

    return (
        <>
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <div className="hero vh-100 d-flex align-items-center">
                    <div className="container">
                        <div className="hero-detail">
                            <div className="row mx-0 gx-5 d-flex align-items-center">
                                <div className="col-lg-5 avatar pe-lg-5 pe-0 ps-0">
                                    <img src={img1} className="img-fluid profile-img p-lg-0 p-0" alt="ProfilePic" />
                                </div>
                                <div className='col-lg-7'>
                                    <div className="hero-info text-lg-start text-center ps-lg-4" data-aos="fade-right" data-aos-delay="800" data-aos-duration="800">
                                        <h5 className='text-capitalize mb-0 text-white opacity-50'> Hi, My name is </h5>
                                        <h1 className='text-white fw-bold mb-1 text-uppercase'> Tirth Patel </h1>
                                        <h2 className='mb-lg-4 fs-5 d-flex text-capitalize justify-content-lg-start justify-content-center'> I'm&nbsp;<Typewriter options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 60,
                                            strings: [
                                                "a Web developer.",
                                                " a UI/UX Designer.",
                                            ],
                                        }} /> </h2>
                                        <p className='text-white opacity-50 fst-italic'> Creative Web Developer & UI/UX Designer based in Gujarat, India and happy to Work With You and Help You Grow Your Buisness. </p>
                                    </div>
                                    <div className="social-icons mt-5 w-100 d-flex ps-lg-4 justify-content-lg-start justify-content-center">
                                        <ul className='list-unstyled fs-5 d-flex w-50 text-white' data-aos="fade-right" data-aos-delay="800" data-aos-duration="800">
                                            <li className='me-3'> <i className='fs-4'> <FaFacebookF /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaInstagram /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaTwitter /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaGithub /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaLinkedinIn /> </i> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="hero vh-100 d-flex align-items-center" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600">
                    <div className="container">
                        <div className="hero-detail">
                            <div className="row mx-0 gx-5 d-flex align-items-center">
                                <div className="col-lg-5 avatar pe-lg-5 pe-0 ps-0">
                                    <img src={img1} className="img-fluid profile-img p-lg-0 p-sm-5 p-0" alt="Profile Picture" />
                                </div>
                                <div className='col-lg-7' data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                                    <div className="hero-info text-lg-start text-center ps-lg-4">
                                        <h5 className='text-capitalize mb-0 text-white opacity-50'> Hi, My name is </h5>
                                        <h1 className='text-white fw-bold mb-1 text-uppercase'> Tirth Patel </h1>
                                        <h2 className='mb-4 fs-5 d-flex text-capitalize'> I'm&nbsp;<Typewriter options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 60,
                                            strings: [
                                                "a Web developer.",
                                                " a UI/UX Designer.",
                                            ],
                                        }} /> </h2>
                                        <p className='text-white opacity-50 fst-italic'> Creative Web Developer & UI/UX Designer based in Gujarat, India and happy to Work With You and Help You Grow Your Buisness. </p>
                                    </div>
                                    <div className="social-icons mt-lg-5 mt-4 w-100 d-flex ps-lg-4">
                                        <ul className='list-unstyled fs-5 d-flex w-50 text-white'>
                                            <li className='me-3'> <i className='fs-4'> <FaFacebookF /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaInstagram /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaTwitter /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaGithub /> </i> </li>
                                            <li className='me-3'> <i className='fs-4'> <FaLinkedinIn /> </i> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </motion.div>
        </>
    )
}

export default Home

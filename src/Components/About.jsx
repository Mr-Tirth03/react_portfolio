import React from 'react'
import img1 from '../Images/User.jpg'
import { motion } from 'framer-motion';
import { FaHtml5 } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {

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
            opacity: 0,
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
                <div className="about vh-100 my-5 py-3">
                    <div className="info">
                        <div className="row m-0 gy-5 gx-5">
                            <div className="col-12 text-center">
                                <img src={img1} className="img-fluid" alt="Profile Picture" />
                            </div>
                            <div className="col-lg-6 my-5 pb-lg-4 pb-1" data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
                                <h1 className='fs-4 text-white fw-bold mb-4'> Tirth Patel & Web Developer </h1>
                                <p className='text-white opacity-75 fst-italic lh-lg'>Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.</p>
                                <button className='px-5 py-2 mt-3'> <span> Download CV </span> </button>
                                {/* <button className='px-5 py-2 mt-3'> <span> Download CV </span> </button> */}
                            </div>
                            <div className="col-lg-6 personal-info my-5 pt-lg-4 pb-lg-5 pb-1" data-aos="fade-right" data-aos-delay="400" data-aos-duration="600">
                                <ul className='list-unstyled lh-lg'>
                                    <li> <span className='w-25 d-inline-block text-white fw-bold'> Birthday: </span> 19.06.2002 </li>
                                    <li> <span className='w-25 d-inline-block text-white fw-bold'> Age: </span> 20 </li>
                                    <li> <span className='w-25 d-inline-block text-white fw-bold'> Address: </span> Surat, Gujarat, India. </li>
                                    <li> <span className='w-25 d-inline-block text-white fw-bold'> Email: </span> tirthpatel03@gmail.com </li>
                                    <li> <span className='w-25 d-inline-block text-white fw-bold'> Phone: </span> +91 93288 99759 </li>
                                    <li> <span className='w-25 d-inline-block text-white fw-bold flex-nowrap'> Degree: </span> Bechelore in Computer Application </li>
                                    <li> <span className='w-25 d-inline-block text-white fw-bold'> Freelance: </span> Available </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* <div className="about vh-100 my-5 py-3" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600">
                <div className="info">
                    <div className="row m-0 gy-5 gx-5">
                        <div className="col-12 text-center" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                            <img src={img1} className="img-fluid" alt="Profile Picture" />
                        </div>
                        <div className="col-lg-6 my-5 pb-lg-4 pb-1" data-aos="fade-right" data-aos-delay="300" data-aos-duration="600">
                            <h1 className='fs-4 text-white fw-bold mb-4'> Tirth Patel & Web Developer </h1>
                            <p className='text-white opacity-75 fst-italic lh-lg'>Hello, I am a creative photographer based in New York and happy to travel all over Europe to capture your big day in candid and authentic photos. I will create a lasting memory of the people.</p>
                            <button className='px-5 py-2 mt-3'> <span> Read More </span> </button>
                        </div>
                        <div className="col-lg-6 personal-info my-5 pt-lg-4 pb-lg-5 pb-1" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                            <ul className='list-unstyled lh-lg'>
                                <li> <span className='w-25 d-inline-block text-white fw-bold'> Birthday: </span> 19.06.2002 </li>
                                <li> <span className='w-25 d-inline-block text-white fw-bold'> Age: </span> 20 </li>
                                <li> <span className='w-25 d-inline-block text-white fw-bold'> Address: </span> Surat, Gujarat, India. </li>
                                <li> <span className='w-25 d-inline-block text-white fw-bold'> Email: </span> tirthpatel03@gmail.com </li>
                                <li> <span className='w-25 d-inline-block text-white fw-bold'> Phone: </span> +91 93288 99759 </li>
                                <li> <span className='w-25 d-inline-block text-white fw-bold flex-nowrap'> Degree: </span> Bechelore in Computer Application </li>
                                <li> <span className='w-25 d-inline-block text-white fw-bold'> Freelance: </span> Available </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default About;
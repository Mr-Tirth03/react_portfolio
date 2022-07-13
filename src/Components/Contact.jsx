import React from 'react'
import { motion } from 'framer-motion';
import img1 from '../Images/User.jpg'

function Contact() {

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
                <div className="contact py-5 mt-5 vh-100">
                    <div className="container">
                        <div className="cont-detail">
                            <div className="title px-4">
                                <h2 className='text-uppercase px-3 text-white opacity-50'> contact </h2>
                            </div>
                            <div className="head ps-lg-4 mt-md-3 mt-0">
                                <div className="row d-flex align-items-center">
                                    <div className="col-12">
                                        <h1 className='text-white fs-2 fw-bold'> Get in Touch </h1>
                                    </div>
                                    <div className="col-12 contact-form ps-3">
                                        {/* <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Madurai,+Tamil+Nadu&amp;aq=0&amp;oq=madursi&amp;sll=10.782836,78.288503&amp;sspn=5.674603,10.755615&amp;ie=UTF8&amp;hq=&amp;hnear=Madurai,+Tamil+Nadu&amp;t=m&amp;z=12&amp;ll=9.925201,78.119775&amp;output=embed"></iframe> */}
                                        <form className='mt-5'>
                                            <div className="mb-5">
                                                <input type="name" className="form-control rounded-0" placeholder='Name' />
                                            </div>
                                            <div className="mb-5">
                                                <input type="email" className="form-control rounded-0" placeholder='Email' />
                                            </div>
                                            <div className="mb-4">
                                                <textarea rows="4" className="form-control rounded-0" placeholder='Message' />
                                            </div>
                                            <button className='px-5 py-2 mt-3'> <span> Send Message </span> </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* <div className="contact py-5 my-5 vh-100">
                <div className="container">
                    <div className="cont-detail">
                        <div className="title px-4">
                            <h2 className='text-uppercase px-3 text-white opacity-50'> contact </h2>
                        </div>
                        <div className="head ps-lg-4 mt-md-3 mt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-12">
                                    <h1 className='text-white fs-2 fw-bold'> Get in Touch </h1>
                                </div>
                                <div className="col-12 contact-form ps-4">
                                <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Madurai,+Tamil+Nadu&amp;aq=0&amp;oq=madursi&amp;sll=10.782836,78.288503&amp;sspn=5.674603,10.755615&amp;ie=UTF8&amp;hq=&amp;hnear=Madurai,+Tamil+Nadu&amp;t=m&amp;z=12&amp;ll=9.925201,78.119775&amp;output=embed"></iframe>
                                    <form className='my-5'>
                                        <div className="mb-5">
                                            <input type="name" className="form-control rounded-0" placeholder='Name' />
                                        </div>
                                        <div className="mb-5">
                                            <input type="email" className="form-control rounded-0" placeholder='Email' />
                                        </div>
                                        <div className="mb-5">
                                            <textarea rows="4" className="form-control rounded-0" placeholder='Message' />
                                        </div>
                                        <button className='px-5 py-2 mt-3'> <span> Send Message </span> </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Contact

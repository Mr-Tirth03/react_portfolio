import React, { useState } from 'react'
import PortfolioApi from '../PortfolioApi'
import { motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Portfolio() {

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

    const [items, setItems] = useState(PortfolioApi);

    const filterItem = (cateItem) => {
        const updatedItems = PortfolioApi.filter((curElem) => {
            return curElem.category === cateItem;
        })

        setItems(updatedItems);
    }


    return (
        <>
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <div className="portfolio vh-100 my-5 py-5">
                    <div className="container">
                        <div className="port-detail">
                            <div className="title px-4">
                                <h2 className='text-uppercase px-3 text-white opacity-50'> Portfolio </h2>
                            </div>
                            <div className="head ps-lg-4 mt-md-3 mt-0">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-5">
                                        <h1 className='text-white fs-2 fw-bold'> Creative Portfolio </h1>
                                    </div>
                                    <div className="col-lg-7 mt-lg-0 mt-4">
                                        <ul className='list-unstyled d-flex justify-content-lg-between justify-content-around m-0'>
                                            <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => setItems(PortfolioApi)}> All </button> </li>
                                            <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Video')}> Video </button> </li>
                                            <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Youtube')}> Youtube </button> </li>
                                            <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Photography')}> Photography </button> </li>
                                            <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Details')}> Details </button> </li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                            <div className="port-info my-lg-5 my-4">
                                <div className="row gy-5 ps-lg-3">
                                    {
                                        items.map((elem) => {
                                            const { id, image } = elem;
                                            return (
                                                <div className="col-md-6 px-lg-4" data-aos="fade-right" data-aos-delay="800" data-aos-duration="800" key={id}>
                                                    <img src={image} className='img-fluid' alt={image} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* <div className="portfolio vh-100 my-5 py-5" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600">
                <div className="container">
                    <div className="port-detail">
                        <div className="title px-4">
                            <h2 className='text-uppercase px-3 text-white opacity-50'> Portfolio </h2>
                        </div>
                        <div className="head ps-lg-4 mt-md-3 mt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-5">
                                    <h1 className='text-white fs-2 fw-bold'> Creative Portfolio </h1>
                                </div>
                                <div className="col-lg-7 mt-lg-0 mt-4" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                                    <ul className='list-unstyled d-flex justify-content-lg-between justify-content-around m-0'>
                                        <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => setItems(PortfolioApi)}> All </button> </li>
                                        <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Video')}> Video </button> </li>
                                        <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Youtube')}> Youtube </button> </li>
                                        <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Photography')}> Photography </button> </li>
                                        <li className='nav-item'> <button className='border-0 text-white opacity-75 pb-1 hovr' onClick={() => filterItem('Details')}> Details </button> </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="port-info my-lg-5 my-4">
                            <div className="row gy-5 ps-lg-3">
                                {
                                    items.map((elem) => {
                                        const { id, image } = elem;
                                        return (
                                            <div className="col-md-6 px-lg-4" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000" key={id}>
                                                <img src={image} className='img-fluid' alt={image} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Portfolio

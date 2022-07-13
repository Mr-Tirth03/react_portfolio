import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { RiSuitcase3Fill } from 'react-icons/ri';
import { IoMdMailOpen } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import Logo from '../Images/logo.svg'

function Navbar() {
    return (
        <>
            <nav className='navbar px-5'>
                <div className="menu w-100">
                    <ul className='navbar-nav m-0 p-0'>
                        <li activeClassName="active" exact="true" className='logo text-uppercase'> <NavLink to='/' className='text-decoration-none fs-2 fw-bolder text-white'> <img src={Logo} className="img-fluid" alt="img" /> </NavLink> </li>
                        {/* <li activeClassName="active" className='nav-item py-0 text-white list-unstyled'> <NavLink className='nav-link text-decoration-none' to="/"> <i className="me-lg-1 me-0 text-white fa fa-home opacity-50"></i> <span className='opacity-50 text-white'> Home </span> </NavLink> </li> */}
                        <li activeClassName="active" className='nav-item py-0 text-white list-unstyled'> <NavLink className='nav-link text-decoration-none' to="/"> <i className="me-lg-1 me-0 text-white opacity-50"> <IoIosHome /> </i> <span className='opacity-50 text-white'> Home </span> </NavLink> </li>
                        <li activeClassName="active" className='nav-item py-0 text-white list-unstyled'> <NavLink className='nav-link text-decoration-none' to="/portfolio"> <i className="me-lg-1 me-0 text-white opacity-50"> <RiSuitcase3Fill /> </i> <span className='opacity-50 text-white'> Portfolio </span> </NavLink> </li>
                        <li activeClassName="active" className='nav-item py-0 text-white list-unstyled'> <NavLink className='nav-link text-decoration-none' to="/about"> <i className="me-lg-1 me-0 text-white opacity-50"> <BsFillPersonFill /> </i> <span className='opacity-50 text-white'> About </span> </NavLink> </li>
                        <li activeClassName="active" className='nav-item py-0 text-white list-unstyled'> <NavLink className='nav-link text-decoration-none' to="/contact"> <i className="me-lg-1 me-0 text-white opacity-50"> <IoMdMailOpen /> </i> <span className='opacity-50 text-white'> Contact </span> </NavLink> </li>
                    </ul>
                    <div className="copy-right">
                        <p activeClassName="active" exact="true" className='fst-italic m-0'> © 2022 Tokyo <br /> Created by <NavLink to="/" className=' text-decoration-none'> <span className='text-white opacity-75'> Tirth Patel </span> </NavLink> </p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
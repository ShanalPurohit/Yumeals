import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

function Navbar(){
    return(
        <nav className='navbar'>
           <h1 className='logo'>Yum<h1 className='logo1'>:)Meals</h1></h1>
            <ul className='nav-links'>
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>

                <Link to="/categories" className='categories'>
                    <li>Categories</li>
                </Link>

                <Link to="/special" className='special'>
                    <li>Special</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;
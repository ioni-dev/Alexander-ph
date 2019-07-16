import React from 'react';
import { Link } from 'react-router-dom';
import '../css/gallery.css';


const Menu = () => {
    return (
        <div className='menu-container'>
            <Link to='/' className='menu-item'>my work</Link>
            <Link to='/about' className='menu-item'>about</Link>
            <Link to='/contact' className='menu-item'>contact</Link>
        </div>
    )
}

export default Menu;
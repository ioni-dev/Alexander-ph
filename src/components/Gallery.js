import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../css/gallery.css';

class Gallery extends React.Component {
    render() {
        return (
            <div className='gal-container'>
                <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"' >
                    <Link to={'/view/monochrome'} className='link'><div className='wow slideInUp'>monochromatic photographs</div></Link>
                    <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554057878/Alexander1/Set%20BW/8.jpg' alt='beach' />
                </div>
                <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"'>
                    <Link to={'/view/solitude'} className='link'><div className='wow slideInUp'>solitude</div></Link>
                    <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554058253/Alexander1/Varias/11.jpg' alt='somehting' />
                </div>
                <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"'>
                    <Link to={'/view/beach'} className='link'><div className='wow slideInUp'>beach photographs</div></Link>
                    <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554058100/Alexander1/Beach/18.jpg' alt='alone' />
                </div>
                <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"'>
                    <Link to={'/view/colour'} className='link'><div className='wow slideInUp'>color film</div></Link>
                    <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554055193/Alexander1/Colour/17.jpg' alt='girl' />
                </div>

            </div>
        )
    }
}

export default Gallery;


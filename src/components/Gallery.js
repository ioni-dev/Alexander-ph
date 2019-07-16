import React, { Fragment } from 'react';
import '../css/gallery.css';

const Gallery = () => {
    return (
        <Fragment className='gal-container'>
            <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"' >
                <div className='wow slideInUp'>monochromatic photographs</div>
                <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554057878/Alexander1/Set%20BW/8.jpg' alt='beach' />
            </div>
            <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"'>
                <div className='wow slideInUp'>solitude</div>
                <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554058253/Alexander1/Varias/11.jpg' alt='somehting' />
            </div>
            <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"'>
                <div className='wow slideInUp'>beach photographs</div>
                <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554058100/Alexander1/Beach/18.jpg' alt='alone' />
            </div>
            <div className='each-gallery wow fadeIn data-wow-delay="5s" data-wow-offset="5"'>
                <div className='wow slideInUp'>color film</div>
                <img src='https://res.cloudinary.com/dbykiqk33/image/upload/v1554055193/Alexander1/Colour/17.jpg' alt='girl' />
            </div>

        </Fragment>
    )
}

export default Gallery;
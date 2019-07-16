import React from 'react';
import Gallery from './Gallery';
import '../css/gallery.css';

const Main = () => {
    return (
        <React.Fragment>
            <div className='presentation'>
                <p>Alexander Jaramillo<br /> Photographer<br />Acapulqueño de corazon</p>
            </div>
            <div className='gallery'>
                <Gallery />
            </div>
        </React.Fragment>
    )
}

export default Main;
import React from 'react'
import '../css/slide.css';

const beach = {
    couple: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058103/Alexander1/Beach/26.jpg',
    solitude: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058103/Alexander1/Beach/25.jpg',
    alone: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058103/Alexander1/Beach/22.jpg',
    wind: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058102/Alexander1/Beach/24.jpg',
    mountain: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058101/Alexander1/Beach/23.jpg',
    rocks: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058101/Alexander1/Beach/19.jpg'
}


const solitude = {
    ruins: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058258/Alexander1/Varias/36.jpg',
    lake: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058256/Alexander1/Varias/35.jpg',
    structure: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058255/Alexander1/Varias/28.jpg',
    abandon: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058255/Alexander1/Varias/30.jpg',
    nature: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058254/Alexander1/Varias/20.jpg',
    books: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058253/Alexander1/Varias/13.jpg',
    church: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554058254/Alexander1/Varias/31.jpg'
}

const monochrome = {
    protest: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554057878/Alexander1/Set%20BW/6.jpg',
    beachInBlack: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554057877/Alexander1/Set%20BW/4.jpg',
    belowTheBridge: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554051879/Alexander1/Set%20BW/5.jpg'
}

const colour = {
    kid: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554051759/Alexander1/Colour/37.jpg',
    color: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554051759/Alexander1/Colour/38.jpg',
    boat: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554051757/Alexander1/Colour/27.jpg',
    concert: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554051757/Alexander1/Colour/16.jpg',
    leak: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554051759/Alexander1/Colour/12.jpg',
    person: 'https://res.cloudinary.com/dbykiqk33/image/upload/v1554051757/Alexander1/Colour/10.jpg'
}

export const BeachSlide = ({ selectedAlbum }) => {
    let selection;
    if (selectedAlbum === 'beach') selection = beach;
    if (selectedAlbum === 'solitude') selection = solitude;
    if (selectedAlbum === 'monochrome') selection = monochrome;
    if (selectedAlbum === 'colour') selection = colour;

    return (
        <div className='slide-album'>
            {console.log(selection)}
            {Object.entries(selection).map(([img, i]) => <img src={i} alt={img} key={img} />)}
        </div>
    )
}

import React from 'react';
import { BeachSlide } from '../common/AlbumsPaths';


class Album extends React.Component {
    render() {
        let selectedAlbum = this.props.match.params.album;

        return (
            <div>
                <BeachSlide selectedAlbum={selectedAlbum} className='slide-album' />
            </div>
        )
    }

}

export default Album;
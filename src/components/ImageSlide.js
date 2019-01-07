import React from 'react'

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div
            className='carousel__image-slide'
            style={styles}
        >
        </div>
    )
}

export default ImageSlide
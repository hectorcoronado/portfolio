import React from 'react'

const ImageSlide = ({url}) => {
    const styles = {
        width: '100%'
    }

    return (
        <img
            className='carousel__image-slide'
            style={styles}
            src={url}
        >
        </img>
    )
}

export default ImageSlide
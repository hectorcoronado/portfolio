import React from 'react'

const ImageSlideArrow = ({direction, clickFn, glyph}) => (
    <div
        className={`carousel__image-slide-arrow image-slide-arrow--${direction}`}
        onClick={clickFn}
    >
        {glyph}
    </div>
)

export default ImageSlideArrow
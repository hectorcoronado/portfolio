import React from 'react'

import ImageSlide from './ImageSlide'
import ImageSlideArrow from './ImageSlideArrow'

const imgUrls = [
    "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
    "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
    "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
    "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

class Carousel extends React.Component {
    constructor (props) {
        super(props)

        this.nextSlide = this.nextSlide.bind(this)
        this.previousSlide = this.previousSlide.bind(this)

        this.state = {
            currentImageIndex: 0
        }
    }

    /**
     * if index is pointing to first image in array and user clicks left
     * arrow, index should point to last image in array (imgUrls.length - 1).
     */
    previousSlide () {
        const lastIndex = imgUrls.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === 0
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

        this.setState({
            currentImageIndex: index
        })
    }

    /**
     * if index is pointing at last image, reset to point to 1st (index = 0)
     */
    nextSlide () {
        const lastIndex = imgUrls.length - 1
        const { currentImageIndex } = this.state
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1

        this.setState({
            currentImageIndex: index
        })
    }

    render () {
        return (
            <div className='carousel'>
                <ImageSlideArrow
                    direction='left'
                    clickFn={this.previousSlide}
                    glyph='&#9664;'
                />

                <ImageSlide
                    url={ imgUrls[this.state.currentImageIndex] }
                />

                <ImageSlideArrow
                    direction='right'
                    clickFn={this.nextSlide}
                    glyph='&#9654;'
                />
            </div>
        )
    }
}

export default Carousel
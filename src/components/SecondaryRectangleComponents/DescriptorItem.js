import React from 'react'

import AnimateOnChange from 'react-animate-on-change'

const DescriptorItem = props => (
    <AnimateOnChange
        baseClassName='fading-text'
        animationClassName='fading-text--fade'
        animate={props.animate}
        onAnimationEnd={props.handleAnimationEnd}
    >
        { props.text }
    </AnimateOnChange>
)

export default DescriptorItem
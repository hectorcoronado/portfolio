import React from 'react'

const PrimaryRectangle = props => (
    <div className={`primary-rectangle${props.modifier ? ` ${props.modifier}` : ''}`}>
        {props.children}
    </div>
)

export default PrimaryRectangle
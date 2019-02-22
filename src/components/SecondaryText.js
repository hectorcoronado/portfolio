import React from 'react'

const SecondaryText = props => (
    <h2 className={`secondary-text${props.modifier ? ` ${props.modifier}` : ''}`}>
        {props.text}
    </h2>
)

export default SecondaryText
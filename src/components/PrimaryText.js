import React from 'react'

const PrimaryText = props => (
    <h2 className={`primary-text${props.modifier ? ` ${props.modifier}` : ''}`}>
        {props.text}
    </h2>
)

export default PrimaryText
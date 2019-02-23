import React from 'react'

const barColors = ['mustard', 'catsup', 'turquoise', 'midnight', 'plum']
const bars = barColors.map(color => <div key={color} className={`footer__color-bar__section footer__color-bar__section--${color}`} />)

const ColorBar = () => (
    <div className='footer footer__color-bar'>
        {bars}
    </div>
)

export default ColorBar
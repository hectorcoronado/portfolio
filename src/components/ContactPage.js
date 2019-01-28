import React from 'react'

import HoneycombContainer from './SecondaryRectangleComponents/HoneycombContainer'
import PrimaryRectangle from './PrimaryRectangle'
import SecondaryRectangle from './SecondaryRectangle'

const ContactPage = () => (
  <div className='rectangle-container'>
    <PrimaryRectangle />
    <SecondaryRectangle>
      <HoneycombContainer />
    </SecondaryRectangle>
  </div>
)

export default ContactPage
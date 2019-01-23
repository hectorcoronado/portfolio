import React from 'react'

import Honeycomb from './SecondaryRectangleComponents/Honeycomb'
import PrimaryRectangle from './PrimaryRectangle'
import SecondaryRectangle from './SecondaryRectangle'

const ContactPage = () => (
  <div className='rectangle-container'>
    <PrimaryRectangle />
    <SecondaryRectangle>
      <Honeycomb />
    </SecondaryRectangle>
  </div>
)

export default ContactPage
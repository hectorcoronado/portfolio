import React from 'react'

import ContactPageLinks from './ContactPageLinks'
import HoneycombContainer from './SecondaryRectangleComponents/HoneycombContainer'
import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'
import SecondaryText from './SecondaryText'

const ContactPage = () => (
  <div className='rectangle-container contact-page'>
    <PrimaryRectangle modifier='primary-rectangle--contact'>
      <PrimaryText text='hector coronado' />
      <SecondaryText text="i'd like to hear from you!" modifier='secondary-text--contact'/>
      <ContactPageLinks />
    </PrimaryRectangle>
    <SecondaryRectangle>
      <HoneycombContainer />
    </SecondaryRectangle>
  </div>
)

export default ContactPage
import React from 'react'

import HoneycombContainer from './SecondaryRectangleComponents/HoneycombContainer'
import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'
import SecondaryText from './SecondaryText'

const ContactPage = () => (
  <div className='rectangle-container contact-page'>
    <PrimaryRectangle>
      <PrimaryText text='hector coronado' />
      <a className='contact-page__link contact-page__link--email-link' href='mailto:hectorcoronado.developer@gmail.com'>
        <SecondaryText text='hectorcoronado.developer@gmail.com' />
      </a>
      <a className='contact-page__link contact-page__link--github-link' href='https://github.com/hectorcoronado'><i className='fab fa-github-square'></i></a>
      <a className='contact-page__link contact-page__link--twitter-link' href='https://twitter.com/HCoronado'><i className='fab fa-twitter-square'></i></a>
    </PrimaryRectangle>
    <SecondaryRectangle>
      <HoneycombContainer />
    </SecondaryRectangle>
  </div>
)

export default ContactPage
import React from 'react'

import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'

const HomePage = () => (
  <div className='rectangle-container'>
    <PrimaryRectangle>
      <PrimaryText text='hector coronado' />
      <PrimaryText text='web developer' />
    </PrimaryRectangle>
    <SecondaryRectangle />
  </div>
)

export default HomePage
import React from 'react'

import DescriptorsList from './SecondaryRectangleComponents/DescriptorsList'
import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'

const HomePage = () => (
    <div className='rectangle-container'>
        <PrimaryRectangle>
            <PrimaryText text='hector coronado' />
            <PrimaryText text='web developer' />
        </PrimaryRectangle>
        <SecondaryRectangle>
            <DescriptorsList />
        </SecondaryRectangle>
    </div>
)

export default HomePage
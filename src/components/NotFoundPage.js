import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'
import SecondaryText from './SecondaryText'

const NotFoundPage = () => (
    <div className='rectangle-container 404-page'>
        <PrimaryRectangle modifier='primary-rectangle--404-page'>
            <PrimaryText text='404' />
            <SecondaryText text='you probably made a typo cos i am a good developer.' />
            <Link to='/'>go home</Link>
        </PrimaryRectangle>
        <SecondaryRectangle />
    </div>
)

export default NotFoundPage

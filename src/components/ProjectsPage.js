import React from 'react'

import Carousel from './Carousel/Carousel'
import PrimaryRectangle from './PrimaryRectangle'
import SecondaryRectangle from './SecondaryRectangle'

const ProjectsPage = () => (
  <div className='rectangle-container'>
    <PrimaryRectangle>
    </PrimaryRectangle>
    <SecondaryRectangle>
      <Carousel />
    </SecondaryRectangle>
  </div>
)

export default ProjectsPage
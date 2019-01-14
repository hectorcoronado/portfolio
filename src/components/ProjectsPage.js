import React from 'react'

import Carousel from './Carousel/Carousel'
import PrimaryRectangle from './PrimaryRectangle'
import SecondaryRectangle from './SecondaryRectangle'

const ProjectsPage = () => (
  <div>
    this is the projects page
    <PrimaryRectangle>
    </PrimaryRectangle>
    <SecondaryRectangle>
      <Carousel />
    </SecondaryRectangle>
  </div>
)

export default ProjectsPage

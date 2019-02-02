import React from 'react'

import PrimaryRectangle from '../PrimaryRectangle'
import PrimaryText from '../PrimaryText'
import SecondaryRectangle from '../SecondaryRectangle'
import ImageSlide from './ImageSlide'
import ImageSlideArrow from './ImageSlideArrow'
import TechList from './TechList'


const projects = [
  {
    name: 'summvs',
    tech: ['react', 'redux', 'mongoose/mongodb', 'express', 'jwt auth', 'stripe', 'webpack/babel'],
    gitHubUrl: 'https://github.com/hectorcoronado/summvs',
    imageUrl: "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
    projectUrl: 'http://www.summvs.com'
  },
  {
    name: 'anthropogenic thermal maximum',
    tech: ['react', 'openweathermaps api', 'scss', 'foundation', 'express', 'webpack/babel'],
    gitHubUrl: 'https://github.com/hectorcoronado/react-weather',
    imageUrl: "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
    projectUrl: 'https://anthropogenicthermalmaximum.herokuapp.com/'
  },
  {
    name: 'chronologick',
    tech: ['react', 'scss', 'foundation', 'webpack/babel', 'mocha', 'karma'],
    gitHubUrl: 'https://github.com/hectorcoronado/react-timer',
    imageUrl: "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
    projectUrl: 'https://chronologick.herokuapp.com/'
  }
]

class ProjectsPage extends React.Component {
  constructor() {
    super()

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)

    this.state = {
      currentProject: 0
    }  }

  /**
   * if index is pointing to first image in array and user clicks left
   * arrow, index should point to last image in array (imgUrls.length - 1).
   */
  previousSlide() {
    const lastIndex = projects.length - 1
    const { currentProject } = this.state
    const shouldResetIndex = currentProject === 0
    const index = shouldResetIndex ? lastIndex : currentProject - 1

    this.setState({
      currentProject: index
    })
  }

  /**
   * if index is pointing at last image, reset to point to 1st (index = 0)
   */
  nextSlide() {
    const lastIndex = projects.length - 1
    const { currentProject } = this.state
    const shouldResetIndex = currentProject === lastIndex
    const index = shouldResetIndex ? 0 : currentProject + 1

    this.setState({
      currentProject: index
    })
  }

  render () {
    const project = projects[this.state.currentProject]
    const codeChars = String.fromCharCode(60, 47, 62)

    return (
      <div className='rectangle-container'>
        <PrimaryRectangle>
          <ImageSlideArrow
            direction='left'
            clickFn={this.previousSlide}
            glyph='&#9664;'
          />
          <PrimaryText text={project.name} />
          <a href={project.gitHubUrl} className='github-link'>{codeChars}</a>
          <TechList techList={project.tech} />
        </PrimaryRectangle>
        <SecondaryRectangle>
          <a href={project.projectUrl}>
            <ImageSlide
              url={project.imageUrl}
            />
          </a>
          <ImageSlideArrow
            direction='right'
            clickFn={this.nextSlide}
            glyph='&#9654;'
          />
        </SecondaryRectangle>
      </div>
    )
  }
}

export default ProjectsPage
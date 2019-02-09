import React from 'react'

import PrimaryRectangle from '../PrimaryRectangle'
import PrimaryText from '../PrimaryText'
import SecondaryRectangle from '../SecondaryRectangle'
import ImageSlide from './ImageSlide'
import ImageSlideArrow from './ImageSlideArrow'
import TechList from './TechList'


const projects = [{
        name: 'summvs',
        tech: ['react', 'redux', 'mongoose+mongodb', 'express', 'jwt auth', 'stripe', 'webpack+babel'],
        gitHubUrl: 'https://github.com/hectorcoronado/summvs',
        imageUrl: '/images/summvs.png',
        projectUrl: 'http://www.summvs.com'
    },
    {
        name: 'anthropogenic thermal maximum',
        tech: ['react', 'openweathermaps api', 'scss', 'foundation', 'express', 'webpack+babel'],
        gitHubUrl: 'https://github.com/hectorcoronado/react-weather',
        imageUrl: '/images/anthrothermax.png',
        projectUrl: 'https://anthropogenicthermalmaximum.herokuapp.com/'
    },
    {
        name: 'chronologick',
        tech: ['react', 'scss', 'foundation', 'mocha+karma', 'webpack+babel'],
        gitHubUrl: 'https://github.com/hectorcoronado/react-timer',
        imageUrl: '/images/chronologick.png',
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
        }
    }

    /**
     * if index is pointing to first image in array and user clicks left
     * arrow, index should point to last image in array (imgUrls.length - 1).
     */
    previousSlide() {
        const lastIndex = projects.length - 1
        const {currentProject} = this.state
        const shouldResetIndex = currentProject === 0
        const index = shouldResetIndex ? lastIndex : currentProject - 1

        this.setState({currentProject: index})
    }

    /**
     * if index is pointing at last image, reset to point to 1st (index = 0)
     */
    nextSlide() {
        const lastIndex = projects.length - 1
        const {currentProject} = this.state
        const shouldResetIndex = currentProject === lastIndex
        const index = shouldResetIndex ? 0 : currentProject + 1

        this.setState({currentProject: index})
    }

    render() {
        const project = projects[this.state.currentProject]
        const codeChars = String.fromCharCode(60, 47, 62)

        return (
            <div className='rectangle-container projects-page'>
                <PrimaryRectangle modifier='primary-rectangle--projects'>
                    <ImageSlideArrow
                        direction='left'
                        clickFn={this.previousSlide}
                        glyph='&#9664;'
                    />
                    <div className='projects-page__project-info'>
                        <PrimaryText text={project.name} modifier='primary-text--project-name'/>
                        <a href={project.gitHubUrl} className='projects-page__project-info__code-link'>{codeChars}</a> 
                    </div>
                    <TechList techList={project.tech} />
                    <ImageSlideArrow
                        direction='right'
                        clickFn={this.nextSlide}
                        glyph = '&#9654;' 
                    />
                </PrimaryRectangle>
                <SecondaryRectangle>
                    <a className='projects-page__project-image' href={project.projectUrl}>
                        <ImageSlide url={project.imageUrl}/>
                    </a>
                </SecondaryRectangle>
            </div>
        )
    }
}

export default ProjectsPage
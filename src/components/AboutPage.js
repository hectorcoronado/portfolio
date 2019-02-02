import React, { Component } from 'react'

import GoldenRatioRectangles from './SecondaryRectangleComponents/GoldenRatioRectangles'
import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'
import SecondaryText from './SecondaryText';

class AboutPage extends Component {
    static defaultProps = {
        name: 'hector coronado',
        aboutText: 'i am a front-end developer at martindale-nolo, where i work with a prodigious team to build fast ui\'s that help people find medical & legal services. i work most often in javascript/react, & love css. when i\'m not doing that, i run to stay in shape & watch at least one movie per week.'
    }

    render () {
        return (
            <div className='rectangle-container'>
                <PrimaryRectangle>
                    <PrimaryText text={this.props.name} />
                    <SecondaryText text={this.props.aboutText} modifier='secondary-text--about'/>
                </PrimaryRectangle>
                <SecondaryRectangle>
                    <GoldenRatioRectangles />
                </SecondaryRectangle>
            </div>
        )
    }
}

export default AboutPage
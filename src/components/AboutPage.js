import React, { Component } from 'react'

import GoldenRatioRectangles from './SecondaryRectangleComponents/GoldenRatioRectangles'
import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'
import SecondaryText from './SecondaryText';

class AboutPage extends Component {
    static defaultProps = {
        name: 'hector coronado',
        aboutText: 'lorem ipsum'
    }

    render () {
        return (
            <div className='rectangle-container'>
                <PrimaryRectangle>
                    <PrimaryText text={this.props.name} />
                    <SecondaryText text={this.props.aboutText} />
                </PrimaryRectangle>
                <SecondaryRectangle>
                    <GoldenRatioRectangles />
                </SecondaryRectangle>
            </div>
        )
    }
}

export default AboutPage
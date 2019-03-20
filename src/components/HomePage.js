import React, { Component } from 'react'

import GoldenRatioRectangles from './SecondaryRectangleComponents/GoldenRatioRectangles'
import PrimaryRectangle from './PrimaryRectangle'
import PrimaryText from './PrimaryText'
import SecondaryRectangle from './SecondaryRectangle'
import SecondaryText from './SecondaryText';

class HomePage extends Component {
    static defaultProps = {
        name: 'hector coronado',
        aboutText: 'pixel-perfectionist front-end developer at martindale-nolo, working mostly in javascript. also love css. i like minimalism, making & thinking about things.'
    }

    render() {
        return (
            <div className='rectangle-container'>
                <PrimaryRectangle modifier='primary-rectangle--home'>
                    <PrimaryText text={this.props.name} />
                    <SecondaryText text={this.props.aboutText} modifier='secondary-text' />
                </PrimaryRectangle>
                <SecondaryRectangle>
                    <GoldenRatioRectangles />
                </SecondaryRectangle>
            </div>
        )
    }
}

export default HomePage
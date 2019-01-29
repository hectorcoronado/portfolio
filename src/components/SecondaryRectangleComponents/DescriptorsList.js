import React, { Component } from 'react'

import DescriptorItem from './DescriptorItem'

class DescriptorsList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            descriptors: [
                'pixel-perfectionist',
                'attentive',
                'collaborative',
                'driven',
                'dependable'
            ],
            currentDescriptor: 0,
            animate: true
        }

        this.handleAnimationEnd = this.handleAnimationEnd.bind(this)
    }

    componentDidMount () {
        this.timer = setInterval(
            () => this.setState(prevState => ({
                currentDescriptor:
                    prevState.currentDescriptor < this.state.descriptors.length - 1
                        ? this.state.currentDescriptor += 1 
                        : 0,
                animate: true
            })), 2100
        )
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    handleAnimationEnd () {
        this.setState(() => ({ animate: false }))
    }

    render () {
        const {
            animate,
            currentDescriptor,
            descriptors
        } = this.state
        return (
            <div className='descriptors'>
                <h2 className='descriptors__header-text'>i am:</h2>
                <DescriptorItem
                    animate={animate}
                    text={descriptors[currentDescriptor]}
                    handleAnimationEnd={this.handleAnimationEnd}
                />
            </div>
        )
    }
}

export default DescriptorsList
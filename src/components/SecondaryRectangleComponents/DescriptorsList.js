import React, { Component } from 'react'

import DescriptorItem from './DescriptorItem'

class DescriptorsList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            descriptors: [
                'this',
                'that',
                'and',
                'some',
                'other'
            ],
            currentDescriptor: 0,
            animate: null
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
            })), 2000
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
            <DescriptorItem
                animate={animate}
                text={descriptors[currentDescriptor]}
                handleAnimationEnd={this.handleAnimationEnd}
            />
        )
    }
}

export default DescriptorsList
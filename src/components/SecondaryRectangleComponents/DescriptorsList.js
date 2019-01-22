import React, { Component } from 'react'

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
            currentDescriptor: 0
        }
    }

    componentDidMount () {
        this.timer = setInterval(
            () => this.setState(prevState => ({
                currentDescriptor: prevState.currentDescriptor < this.state.descriptors.length - 1
                ? this.state.currentDescriptor += 1 
                : 0
            })), 4000
        )
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render () {
        const { currentDescriptor, descriptors } = this.state
        return (
            <h3 className='aClass'>
                {descriptors[currentDescriptor]}
            </h3>
        )
    }
}

export default DescriptorsList
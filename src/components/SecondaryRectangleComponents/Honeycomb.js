import React, { Component } from 'react'
import throttle from 'lodash.throttle'

class Honeycomb extends Component {
    constructor (props) {
        super(props);

        this.state = {}

        this.honeycombRef = React.createRef()
        this.mousetrailRef = React.createRef()
    }

    componentDidMount () {
        const honeycombCanvas = this.honeycombRef.current
        const mousetrailCanvas = this.mousetrailRef.current
    }

    componentWillUnmount () {}

    render () {
        return (
            <div className='honeycomb-container'>
                <canvas
                    className='honeycomb'
                    ref={this.honeycombRef}
                />
                <canvas
                    className='mousetrail'
                    ref={this.mousetrailRef}
                />
            </div>
        )
    }
}

export default Honeycomb
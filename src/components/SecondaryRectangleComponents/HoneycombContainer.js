import React, { Component } from 'react'
import HoneycombCanvas from './HoneycombCanvas'
import MousetrailCanvas from './MousetrailCanvas';

export default class HoneycombContainer extends Component {
    constructor () {
        super()
        this.canvasContainerRef = React.createRef()

        this.setWidthAndHeight = this.setWidthAndHeight.bind(this)

        this.state = {
            height: null,
            width: null
        }
    }
    
    setWidthAndHeight () {
        this.setState({
            height: this.canvasContainerRef.current.clientHeight,
            width: this.canvasContainerRef.current.clientWidth
        })
    }

    componentDidMount() {
        this.setWidthAndHeight()
        window.addEventListener('resize', this.setWidthAndHeight)        
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.setWidthAndHeight)
    }

    render () {
        return (
            <div className='canvas-container' ref={this.canvasContainerRef}>
                <MousetrailCanvas
                    height={this.state.height}
                    width={this.state.width}
                />
                <HoneycombCanvas
                    height={this.state.height}
                    width={this.state.width}
                />
            </div>
        )
    }
}
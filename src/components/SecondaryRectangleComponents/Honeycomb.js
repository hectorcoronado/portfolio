import React, { Component } from 'react'
import throttle from 'lodash.throttle'

class Honeycomb extends Component {
    constructor () {
        super()
        this.canvasContainerRef = React.createRef()
        this.honeycombRef = React.createRef()
        this.mousetrailRef = React.createRef()

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
    
    drawRectInCanvas () {
        const hCtx = this.honeycombRef.current.getContext('2d')
        hCtx.fillRect(0, 0, this.state.width, this.state.height)
    }
    
    componentDidMount() {
        this.setWidthAndHeight()
        window.addEventListener('resize', this.setWidthAndHeight)
    }
    
    componentDidUpdate () {
        this.drawRectInCanvas()
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.setWidthAndHeight)
    }

    render () {
        return (
            <div className='canvas-container' ref={this.canvasContainerRef}>
                <canvas
                    height={this.state.height}
                    width={this.state.width}
                    className='honeycomb'
                    ref={this.honeycombRef}
                />
                <canvas
                    height={this.state.height}
                    width={this.state.width}
                    className='mousetrail'
                    ref={this.mousetrailRef}
                />
            </div>
        )
    }
}

// class Honeycomb extends Component {
//     render() {
//         return <div>
//             <Animation></Animation>
//         </div>;
//     }
// }

// class Animation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { angle: 0 };
//         this.updateAnimationState = this.updateAnimationState.bind(this);
//     }

//     componentDidMount() {
//         this.rAF = requestAnimationFrame(this.updateAnimationState);
//     }

//     componentWillUnmount() {
//         cancelAnimationFrame(this.rAF);
//     }

//     updateAnimationState() {
//         this.setState(prevState => ({ angle: prevState.angle + 1 }));
//         this.rAF = requestAnimationFrame(this.updateAnimationState);
//     }

//     render() {
//         return <Canvas angle={this.state.angle} />
//     }
// }

// class Canvas extends Component {
//     constructor(props) {
//         super(props);
//         this.canvasRef = React.createRef();
//     }

//     componentDidUpdate() {
//         const { angle } = this.props;
//         const canvas = this.canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const width = canvas.width;
//         const height = canvas.height;
//         ctx.save();
//         ctx.beginPath();
//         ctx.clearRect(0, 0, width, height);
//         ctx.translate(width / 2, height / 2);
//         ctx.rotate(angle * Math.PI / 180);
//         ctx.fillStyle = '#4397AC';
//         ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
//         ctx.restore();
//     }

//     render() {
//         return <canvas width="300" height="300" ref={this.canvasRef}></canvas>;
//     }
// }

export default Honeycomb
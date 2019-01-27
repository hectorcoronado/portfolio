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
    
    drawHoneycomb () {
        const hCtx = this.honeycombRef.current.getContext('2d')
        const h = hCtx.canvas.height
        const w = hCtx.canvas.width
        const yd = 16
        const xd = 2 * yd * Math.sin(Math.PI / 3)
        const numHexW = Math.ceil(w  / (2 * xd)) + 1
        const numHexH = Math.ceil(h  / (3 * yd)) + 1
        
        hCtx.strokeStyle = 'rgba(2, 6, 35, 1)'
        hCtx.lineWidth = 1
        
        hCtx.beginPath()
        
        for (let i = 0; i < numHexH; i += 1) {
            const yBase = (i * 3 + 2) * yd - i % 2 * yd
            hCtx.moveTo(0, yBase)
            for (let j = 1; j <= numHexW; j += 1) {
                if (i % 2) {
                    hCtx.lineTo((2 * j - 1) * xd, yBase + yd)
                    hCtx.lineTo(2 * j * xd, yBase)
                    hCtx.moveTo(2 * j * xd, yBase - 2 * yd)
                    hCtx.lineTo(2 * j * xd, yBase)
                } else {
                    hCtx.lineTo((2 * j - 1) * xd, yBase - yd)
                    hCtx.lineTo((2 * j - 1) * xd, yBase - 3 * yd)
                    hCtx.moveTo((2 * j - 1) * xd, yBase - yd)
                    hCtx.lineTo(2 * j * xd, yBase)
                }
            }
        }

        hCtx.stroke()
        hCtx.closePath()
    }
    
    componentDidMount() {
        this.setWidthAndHeight()
        window.addEventListener('resize', this.setWidthAndHeight)
    }
    
    componentDidUpdate () {
        this.drawHoneycomb()
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
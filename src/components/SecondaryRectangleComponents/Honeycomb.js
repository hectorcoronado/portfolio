import React, { Component } from 'react'

class Honeycomb extends Component {
    constructor () {
        super()
        this.honeycombContainerRef = React.createRef()
        this.honeycombRef = React.createRef()
        this.mousetrailRef = React.createRef()

        this.state = {
            styles: {
                height: null,
                width: null
            }
        }
    }
    
    componentDidMount () {
        this.drawRectInCanvas()
    }
    
    drawRectInCanvas () {
        this.setState({
            styles: {
                height: this.honeycombContainerRef.current.clientHeight,
                width: this.honeycombContainerRef.current.clientWidth
            }
        })
        console.log(this.honeycombContainerRef)
        // const hCtx = this.honeycombRef.current.getContext('2d')
        // hCtx.fillRect(5, 5, 200, 200)
    }

    componentDidUpdate () {}

    componentWillUnmount () {}

    render () {
        return (
            <div className='honeycomb-container' ref={this.honeycombContainerRef}>
                <canvas
                    style={this.state.styles}
                    className='honeycomb'
                    ref={this.honeycombRef}
                    />
                <canvas
                    style={this.state.styles}
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
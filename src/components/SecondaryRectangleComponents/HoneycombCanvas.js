import React, { Component } from 'react'

export default class HoneycombCanvas extends Component {
    constructor(props) {
        super(props)

        this.honeycombRef = React.createRef()

        this.drawHoneycomb = this.drawHoneycomb.bind(this)
    }


    drawHoneycomb() {
        const hCtx = this.honeycombRef.current.getContext('2d')
        const h = hCtx.canvas.height
        const w = hCtx.canvas.width
        const yd = 16
        const xd = 2 * yd * Math.sin(Math.PI / 3)
        const numHexW = Math.ceil(w / (2 * xd)) + 1
        const numHexH = Math.ceil(h / (3 * yd)) + 1

        hCtx.strokeStyle = 'rgba(2, 6, 35, 1)' // `$black` in _settings.scss
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
        this.drawHoneycomb()
    }

    componentDidUpdate() {
        this.drawHoneycomb()
    }

    render() {
        return (
            <canvas
                height={this.props.height}
                width={this.props.width}
                className='honeycomb-canvas'
                ref={this.honeycombRef}
            />
        )
    }
}
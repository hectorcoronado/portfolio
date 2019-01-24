import React, { Component } from 'react'
import throttle from 'lodash.throttle'

class Honeycomb extends Component {
    constructor (props) {
        super(props);

        this.state = {}

        this.honeycombRef = React.createRef()
        this.mousetrailRef = React.createRef()

        this.create = this.create.bind(this)
    }

    componentDidMount () {
        // this.create()
    }

    componentDidUpdate () {
        const hnycmbCanvas = this.honeycombRef.current
        const moustrlCanvas = this.mousetrailRef.current

        const cxh = hnycmbCanvas.getContext('2d')
        const cxm = moustrlCanvas.getContext('2d')

        let w = hnycmbCanvas.width
        let h = hnycmbCanvas.height

        const yd = 16
        const xd = 2 * yd * Math.sin(Math.PI / 3)
        const numHexW = Math.ceil(w / (2 * xd)) + 1
        const numHexH = Math.ceil(h / (3 * yd)) + 1

        let mx
        let my

        cxh.strokeStyle = '#ffe1b9'
        cxh.lineWidth = 1
    }

    create = () => {
        let yBase

        cxh.beginPath()

        for (let i = 0; i < numHexH; i += 1) {
            yBase = (i * 3 + 2) * yd - i % 2 * yd
            cxh.moveTo(0, yBase)

            for (let j = 1; j <= numHexW; j += 1) {
                if (i % 2) {
                    cxh.lineTo((2 * j - 1) * xd, yBase + yd)
                    cxh.lineTo(2 * j * xd, yBase)
                    cxh.moveTo(2 * j * xd, yBase - 2 * yd)
                    cxh.lineTo(2 * j * xd, yBase)
                } else {
                    cxh.lineTo((2 * j - 1) * xd, yBase - yd)
                    cxh.lineTo((2 * j - 1) * xd, yBase - 3 * yd)
                    cxh.moveTo((2 * j - 1) * xd, YBase - yd)
                    cxh.lineTo(2 * j * xd, yBase)
                }

                cxh.stroke()
                cxh.closePath()
            }
        }
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
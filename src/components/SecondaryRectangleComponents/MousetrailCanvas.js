import React, { Component } from 'react'

export default class MousetrailCanvas extends Component {
    constructor (props) {
        super(props)

        this.mousetrailRef = React.createRef()

        this.init = this.init.bind(this)
        this.makeHoney = this.makeHoney.bind(this)
    }

    makeHoney(mx, my) {
        const mCtx = this.mousetrailRef.current.getContext('2d')
        const h = mCtx.canvas.height
        const w = mCtx.canvas.width

        mCtx.clearRect(0, 0, w, h)

        const yd = 16
        const xd = 2 * yd * Math.sin(Math.PI / 3)
        const xl = mx % xd
        const xr = xd - mx % xd
        const yu = my % (3 * yd)
        const yb = 3 * yd - my % (3 * yd)
        const hlu = Math.sqrt(Math.pow(xl, 2) + Math.pow(yu, 2))
        const hlb = Math.sqrt(Math.pow(xl, 2) + Math.pow(yb, 2))
        const hru = Math.sqrt(Math.pow(xr, 2) + Math.pow(yu, 2))
        const hrb = Math.sqrt(Math.pow(xr, 2) + Math.pow(yb, 2))

        mCtx.strokeStyle = "#f3c41b" // `$mustard` in _settings.scss
        mCtx.lineWidth = 1
        mCtx.fillStyle = "#4eb9da" // `$turquoise` in _settings.scss

        let hexCx = null
        let hexCy = null

        if (
            (mx % (2 * xd) < xd && my % (6 * yd) < 3 * yd) ||
            (mx % (2 * xd) > xd && my % (6 * yd) >= 3 * yd)
        ) {
            if (hlu < hrb) {
                hexCx = mx - xl
                hexCy = my - yu
            } else {
                hexCx = mx + xr
                hexCy = my + yb
            }
        } else {
            if (hlb < hru) {
                hexCx = mx - xl
                hexCy = my + yb
            } else {
                hexCx = mx + xr
                hexCy = my - yu
            }
        }

        console.log(hexCx)
        console.log(hexCy)

        mCtx.moveTo(hexCx - xd, hexCy - yd)
        mCtx.beginPath()
        mCtx.lineTo(hexCx, hexCy - 2 * yd)
        mCtx.lineTo(hexCx + xd, hexCy - yd)
        mCtx.lineTo(hexCx + xd, hexCy + yd)
        mCtx.lineTo(hexCx, hexCy + 2 * yd)
        mCtx.lineTo(hexCx - xd, hexCy + yd)
        mCtx.lineTo(hexCx - xd, hexCy - yd)
        mCtx.closePath()
        mCtx.fill()
        mCtx.stroke()
    }

    init(e) {
        let mx = e.clientX
        let my = e.clientY
        this.makeHoney(mx, my)
    }

    componentDidMount () {
        this.mousetrailRef.current.addEventListener('mousemove', this.init)
    }
    
    componentWillUnmount() {
        this.mousetrailRef.current.removeEventListener('mousemove', this.init)
    }

    render() {
        return (
            <canvas
                height={this.props.height}
                width={this.props.width}
                className='mousetrail-canvas'
                ref={this.mousetrailRef}
            />
        )
    }
}
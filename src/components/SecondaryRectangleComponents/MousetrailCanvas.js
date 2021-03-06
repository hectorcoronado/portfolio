import React, { Component } from 'react'

export default class MousetrailCanvas extends Component {
    constructor (props) {
        super(props)

        this.mousetrailRef = React.createRef()

        this.getElementPosition = this.getElementPosition.bind(this)
        this.init = this.init.bind(this)
        this.makeHoney = this.makeHoney.bind(this)


        this.state = {
            hexCx: null,
            hexCy: null,
            offsetXPos: null,
            offsetYPos: null
        }
    }


    getElementPosition() {
        const rect = this.mousetrailRef.current.getBoundingClientRect();
        // console.log(rect)

        this.setState({
            offsetXPos: rect.x,
            offsetYPos: rect.y
        })
    }

    makeHoney(mx, my) {
        const mCtx = this.mousetrailRef.current.getContext('2d')
        const h = mCtx.canvas.height
        const w = mCtx.canvas.width

        mCtx.clearRect(0, 0, w, h)

        const yd = 16
        const xd = 2 * yd * Math.sin(Math.PI / 3)
        const xl = mx % xd
        console.log('xl', xl)
        const xr = xd - mx % xd
        console.log('xr', xr)
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

        console.log('this.state.offsetXPos', this.state.offsetXPos)

        hexCx = hexCx - this.state.offsetXPos
        hexCy = hexCy - this.state.offsetYPos

        console.log('hexCx', hexCx)
        // console.log('hexCy', hexCy)

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
        console.log('e.clientX', e.clientX)
        // console.log('e.clientY', e.clientY)
        let mx = e.clientX
        let my = e.clientY

        this.makeHoney(mx, my)
    }

    componentDidMount () {
        this.getElementPosition()

        this.mousetrailRef.current.addEventListener('mousemove', this.init)
        window.addEventListener('resize', this.getElementPosition)
        window.addEventListener('scroll', this.getElementPosition)
    }
    
    componentWillUnmount() {
        this.mousetrailRef.current.removeEventListener('mousemove', this.init)
        window.removeEventListener('resize', this.getElementPosition)
        window.removeEventListener('scroll', this.getElementPosition)

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
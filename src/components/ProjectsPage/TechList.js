import React from 'react'

import TechItem from './TechItem'
import SecondaryText from '../SecondaryText'

class TechList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SecondaryText text='tech stack:' />
                <ul>{this.props.techList.map(tech => (<TechItem key={tech} tech={tech} />))}</ul>
            </div>
        )
    }
}

export default TechList
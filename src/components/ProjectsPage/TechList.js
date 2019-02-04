import React from 'react'

import TechItem from './TechItem'
import SecondaryText from '../SecondaryText'

const TechList = props => (
    <div>
        <SecondaryText text='tech stack:' />
        <ul>{props.techList.map(tech => (<TechItem key={tech} tech={tech} />))}</ul>
    </div>
)

export default TechList
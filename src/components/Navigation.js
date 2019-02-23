import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
    <nav className='navigation'>
        <NavLink to='/' className='navigation__link' activeClassName='is-active' exact>home</NavLink>
        <NavLink to='/about' className='navigation__link' activeClassName='is-active' exact>about</NavLink>
        <NavLink to='/projects' className='navigation__link' activeClassName='is-active' exact>projects</NavLink>
        <NavLink to='/contact' className='navigation__link' activeClassName='is-active' exact>contact</NavLink>
    </nav>
)

export default Navigation
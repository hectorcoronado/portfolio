import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <NavLink to='/' activeClassName='is-active' exact>home</NavLink>
    <NavLink to='/about' activeClassName='is-active' exact>about</NavLink>
    <NavLink to='/projects' activeClassName='is-active' exact>projects</NavLink>
    <NavLink to='/contact' activeClassName='is-active' exact>contact</NavLink>
  </nav>
)

export default Navigation

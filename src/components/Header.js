import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h4>portfolio</h4>
    <NavLink to='/' activeClassName='is-active' exact>home</NavLink>
    <NavLink to='/portfolio' activeClassName='is-active' exact>portfolio</NavLink>
    <NavLink to='/contact'>contact</NavLink>
  </header>
)

export default Header

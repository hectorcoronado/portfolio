import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import Navigation from '../components/Navigation'
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage'
import ProjectsPage from '../components/ProjectsPage'

/**
  * / -> home (in nav)
  * /portfolio -> p'folio home page w/links to items (in nav)
  * /contact -> contact page (in nav)
  */

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route exact path='/portfolio' component={ProjectsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import Footer from '../components/Footer/Footer'
import HomePage from '../components/HomePage'
import Navigation from '../components/Navigation'
import NotFoundPage from '../components/NotFoundPage'
import ProjectsPage from '../components/ProjectsPage/ProjectsPage'

const AppRouter = () => (
  <BrowserRouter>
    <div className='main-container'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter

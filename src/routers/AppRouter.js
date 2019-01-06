import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ContactPage from '../components/ContactPage'
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import NotFoundPage from '../components/NotFoundPage'
import PortfolioItemPage from '../components/PortfolioItemPage'
import PortfolioSummaryPage from '../components/PortfolioPage'

/**
  * / -> home (in nav)
  * /portfolio -> p'folio home page w/links to items (in nav)
  * /portfolio/:id -> p'folio item page that shows id
  * /contact -> contact page (in nav)
  */

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/contact' component={ContactPage} />
        <Route exact path='/portfolio' component={PortfolioSummaryPage} />
        <Route path='/portfolio/:id' component={PortfolioItemPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter

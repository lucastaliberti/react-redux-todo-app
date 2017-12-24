import React from 'react'
import { Route, Switch } from 'react-router-dom'

import BillingCycle from '../BillingCycle'
import Dashboard from '../Dashboard'

const Routes = props => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/billingCycle" component={BillingCycle} />
    <Route component={Dashboard} />
  </Switch>
)

export default Routes

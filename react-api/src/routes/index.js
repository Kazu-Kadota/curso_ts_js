import React from 'react'
import { Switch, withRouter } from 'react-router-dom'

import MyRoute from './my-route'
import Login from '../pages/login'
import Page404 from '../pages/page404'

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path={'/'} component={withRouter(Login)} />
      <MyRoute exact path={'*'} component={withRouter(Page404)} />
    </Switch>
  )
}

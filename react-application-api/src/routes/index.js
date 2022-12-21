import React from 'react'
import { Switch, withRouter } from 'react-router-dom'

import MyRoute from './my-route'
import Aluno from '../pages/aluno'
import Alunos from '../pages/alunos'
import Fotos from '../pages/fotos'
import Register from '../pages/register'
import Login from '../pages/login'
import Page404 from '../pages/page404'

export default function Routes() {
  return (
    <Switch>
      <MyRoute
        exact
        path={'/'}
        component={withRouter(Alunos)}
        isClosed={false}
      />
      <MyRoute
        exact
        path={'/aluno/:id/edit'}
        component={withRouter(Aluno)}
        isClosed
      />
      <MyRoute
        exact
        path={'/aluno/'}
        component={withRouter(Aluno)}
        isClosed
      />
      <MyRoute
        exact
        path={'/fotos/:id'}
        component={withRouter(Fotos)}
        isClosed
      />
      <MyRoute
        exact
        path={'/login'}
        component={withRouter(Login)}
        isClosed={false}
      />
      <MyRoute
        exact
        path={'/register'}
        component={withRouter(Register)}
        isClosed={false}
      />
      <MyRoute path={'*'} component={withRouter(Page404)} />
    </Switch>
  )
}

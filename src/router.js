import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin.js'
import Buttons from './pages/buttons'
import NoMatch from './pages/nomatch'

export default class MSRouter extends React.Component {
  render(){
    return(
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={()=>
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          }></Route>
        </App>
      </HashRouter>
    );
  }
}
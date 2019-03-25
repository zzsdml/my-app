import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin.js'
import Buttons from './pages/buttons'
import NoMatch from './pages/nomatch'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register';
import BTable from './pages/table/table'

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
                <Route path="/admin/form/login" component={FormLogin} />
                <Route path="/admin/form/reg" component={FormRegister}/>
                <Route path="/admin/table/basic" component={BTable}/>
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          }></Route>
        </App>
      </HashRouter>
    );
  }
}
import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import About from './../route1/About'
import Topic from './../route1/Topic'
import Home from './Home'
import Info from './Info'
import NoMatch from './NoMatch'

export default class IRouter extends React.Component {
  render(){
    return (
      <HashRouter>
        <Home>
          <Switch>
            <Route path="/main" render={()=>
              <Main>
                <Route path="/main/:value" component={Info}></Route>
              </Main>
            }></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
          
        </Home>
      </HashRouter>
    );
  }
}
import React from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import About from './../route1/About'
import Topic from './../route1/Topic'
import Home from './Home'

export default class IRouter extends React.Component {
  render(){
    return (
      <HashRouter>
        <Home>
          <Switch>
            <Route path="/main" render={()=>
              <Main>
                <Route exact={true} path="/main/a" component={About}></Route>
              </Main>
            }></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
          </Switch>
          
        </Home>
      </HashRouter>
    );
  }
}
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import TodoLayout from '../components/Todo/TodoLayout';
import NotFound from '../components/ErrorPages/NotFound';
import WelcomePage from '../containers/WelcomePage';
import Login from '../containers/Login';
import Profile from '../containers/Profile';
import Register from './Register';

class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={WelcomePage}/>
          <Route path='/todo' component={TodoLayout}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/register' component={Register}/>
          <Route component={NotFound}/>
        </Switch>

      </div>
    );
  }
}

export default Routers;

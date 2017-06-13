import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import App from '../components/App';
import NotFound from '../components/NotFound';
import WelcomePage from '../containers/WelcomePage';
import Login from '../containers/Login';



class Routers extends Component {
  render() {
    return (
      <div>
        <Link to='/'>default</Link>
        {' '}
        <Link to='/todo'>todos</Link>
        {' '}
        <Link to='/notfound'>not found</Link>
        {' '}
        <Link to='/login'>login</Link>

        <Switch>
          <Route path='/' exact component={WelcomePage}/>
          <Route path='/todo' component={App}/>
          <Route path='/login' component={Login}/>
          <Route component={NotFound}/>
        </Switch>

      </div>
    );
  }
}

export default Routers;

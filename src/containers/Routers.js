import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import App from '../components/App';
import NotFound from '../components/NotFound';
import WelcomePage from '../components/WelcomePage';



class Routers extends Component {
  render() {
    return (
      <div>
        <Link to='/'>default</Link>
        {' '}
        <Link to='/todo'>todos</Link>
        {' '}
        <Link to='/notfound'>NotFound</Link>

<Switch>
  <Route path='/' exact component={WelcomePage}/>
  <Route path='/todo' component={App}/>
  <Route component={NotFound}/>
</Switch>

      </div>
    );
  }
}

export default Routers;

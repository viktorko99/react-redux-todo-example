import React, {Component} from 'react';
import { Route } from 'react-router';
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


        <Route path='/' exact component={WelcomePage}/>
        <Route path='/todo' component={App}/>
        <Route path='/notfound' component={NotFound}/>
      </div>
    );
  }
}

export default Routers;

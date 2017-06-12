import React, {Component} from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import App from '../components/App';


class Routers extends Component {
  render() {
    return (
      <div>
        <Link to='/'>default</Link>
        {' '}
        <Link to='/todo'>todos</Link>

        <Route path='/todo' component={App}/>
      </div>
    );
  }
}

export default Routers;

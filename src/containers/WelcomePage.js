import React, {Component} from 'react';
import WelcomePageComponent from '../components/WelcomePageComponent';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

      this.handleAdressChange = this.handleAdressChange.bind(this);
  }

  handleAdressChange() {
    this.props.history.push('/todo');
  }

  render() {
    return (
        <WelcomePageComponent onAdressChange={this.handleAdressChange}/>
    );
  }
}

export default WelcomePage;

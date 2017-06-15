import React, {Component} from 'react';
import WelcomePageComponent from '../components/WelcomePageComponent';

const divStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px"
}

class WelcomePage extends Component {
  constructor(props) {
    super(props);

      this.handleToLoginAdress = this.handleAdressChange.bind(this, '/login');
      this.handleToRegisterAdress = this.handleAdressChange.bind(this, '/register');
  }

  handleAdressChange(adress) {
    this.props.history.push(adress);
  }

  render() {
    return (
        <WelcomePageComponent
          divStyle={divStyle}
          onToLoginAdress={this.handleToLoginAdress}
          onToRegisterAdress={this.handleToRegisterAdress}
        />
    );
  }
}

export default WelcomePage;

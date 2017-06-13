import React, {Component} from 'react'
import { Button, Jumbotron } from 'react-bootstrap';

const divStyle = {
  background: "#eee",
  padding: "20px",
  margin: "20px"
}

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
        <Jumbotron >
          <div style={divStyle}>
            <h1>Todo-list, refined!</h1>
            <p>Enjoy the beautiness of React and Redux </p>
            <p>Click on button to learn more</p>
            <p><Button bsStyle="success" onClick={this.handleAdressChange}>Learn more</Button></p>
          </div>
        </Jumbotron>
    );
  }
}

export default WelcomePage;

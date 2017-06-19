import React, {Component} from 'react';
import WelcomePageComponent from '../components/WelcomePage/WelcomePageComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import Register from '../containers/Register';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.handleToLoginAdress = this.handleAdressChange.bind(this, '/login');
  }

  handleAdressChange(adress) {
    this.props.history.push(adress);
  }

  render() {
    return (
      <Grid style={{background: "#eee"}} fluid={true}>
        <Row className="show-grid">

          <Col md={6} mdPush={6}>
            <Register />
          </Col>

          <Col md={6} mdPull={6}>
            <WelcomePageComponent
              onToLoginAdress={this.handleToLoginAdress}
            />
          </Col>

        </Row>
      </Grid>
    );
  }
}

export default WelcomePage;

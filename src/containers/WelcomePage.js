import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import WelcomePageComponent from '../components/WelcomePage/WelcomePageComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import Register from '../containers/Register';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.handleAdressChange = this.handleAdressChange.bind(this);
  }

  handleAdressChange() {
    if (this.props.user === null) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <Grid style={{background: "#eee"}} fluid={true}>
        <Row className="show-grid">
        	<Col md={6} mdPush={6}>
              <Register onAdressChange={this.handleAdressChange}/>
          </Col>

          <Col md={6} mdPull={6}>
          	<WelcomePageComponent
          	  onToLoginAdress={this.handleAdressChange}
            />
          </Col>

        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default withRouter(connect(mapStateToProps)(WelcomePage));

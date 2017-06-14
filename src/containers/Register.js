import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogout} from '../actions/actions';
import RegisterComponent from '../components/RegisterComponent';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
      description:'',
      password: '',
    }
    this.handleFirstNameAdd = this.handleFirstNameAdd.bind(this);
    this.handleLastNameAdd = this.handleLastNameAdd.bind(this);
    this.handleAgeAdd = this.handleAgeAdd.bind(this);
    this.handleDescriptionAdd = this.handleDescriptionAdd.bind(this);
    this.handlePaswordAdd = this.handlePaswordAdd.bind(this);
  }

  handleFirstNameAdd(event) {
    this.setState({
      firstName: event.target.value
    });
  }
  handleLastNameAdd(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleAgeAdd(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleDescriptionAdd(event) {
    this.setState({
      description: event.target.value
    });
  }

  handlePaswordAdd(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <RegisterComponent
        onFirstNameAdd={this.handleFirstNameAdd}
        onLastNameAdd={this.handleLastNameAdd}
        onAgeAdd={this.handleAgeAdd}
        onDescriptionAdd={this.handleDescriptionAdd}
        onPasswordAdd={this.handlePaswordAdd}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
   user: state.activeUser
 };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(
     {userLogout}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

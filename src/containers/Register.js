import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '../actions/actions';
import RegisterComponent from '../components/RegisterComponent';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      person: {
        first: '',
        last: '',
        age: 0,
        description:'',
        password: ''
      }
    }
    this.handleFirstNameAdd = this.handleFirstNameAdd.bind(this);
    this.handleLastNameAdd = this.handleLastNameAdd.bind(this);
    this.handleAgeAdd = this.handleAgeAdd.bind(this);
    this.handleDescriptionAdd = this.handleDescriptionAdd.bind(this);
    this.handlePaswordAdd = this.handlePaswordAdd.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleFirstNameAdd(event) {
    this.setState({
      person: {
        ...this.state.person,
        first: event.target.value
      }
    });
  }
  handleLastNameAdd(event) {
    this.setState({
      person: {
        ...this.state.person,
        last: event.target.value
      }
    });
  }

  handleAgeAdd(event) {
    if (isNaN(event.target.value)) {
      alert("Age must be a number");
      event.target.value = null
    } else {
      this.setState({
        person: {
          ...this.state.person,
          age: event.target.value
        }
      });
    }
  }

  handleDescriptionAdd(event) {
    this.setState({
      person: {
        ...this.state.person,
        description: event.target.value
      }
    });
  }

  handlePaswordAdd(event) {
    this.setState({
      person: {
        ...this.state.person,
        password: event.target.value
      }
    });
  }

  handleButtonClick() {
    console.log(this.state.person);
    this.props.addUser(this.state.person);
  }

  render() {
    return (
      <RegisterComponent
        onFirstNameAdd={this.handleFirstNameAdd}
        onLastNameAdd={this.handleLastNameAdd}
        onAgeAdd={this.handleAgeAdd}
        onDescriptionAdd={this.handleDescriptionAdd}
        onPasswordAdd={this.handlePaswordAdd}
        onButtonClick={this.handleButtonClick}
      />
    )
  }
}

function mapStateToProps(state) {
  console.log(state.users);
  return {
   users: state.users
 };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(
     {addUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

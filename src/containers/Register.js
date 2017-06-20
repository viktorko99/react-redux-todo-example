import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser, userLogin} from '../actions/actions';
import RegisterComponent from '../components/Register/RegisterComponent';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      person: {
        first: '',
        last: '',
        age: 0,
        description:'',
        password: '',
        todos: [],
      }
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser(event) {
    const { id, value } = event.target;
    this.setState({
     person: {
        ...this.state.person,
        [id]: value
      }
    });
  }

  handleButtonClick() {
    if ((this.state.person.first !== '') && (this.state.person.last !== '') && (this.state.person.password !== '') ) {
      this.props.addUser(this.state.person);
    } else {
        for (var prop in this.state.person) {
          if (this.state.person[prop] === '') {
            alert( prop + ' is empty');
          }
        }
      }
      this.props.userLogin(this.state.person);
      this.props.history.push('/profile');
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
        onUserAdd={this.handleAddUser}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
   users: state.users
  };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(
     {addUser,
     userLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

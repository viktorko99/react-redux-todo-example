import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {attemptLogin, userLogin} from '../actions/actions';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUserName(event) {
    console.log(event.target.value);
    this.setState({
      userName: event.target.value
    });
  }

  handlePassword(event) {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    });
  }

  handleLogin() {
    this.props.users.forEach(user => {
        if((user.first === this.state.userName) && (user.password === this.state.password)) {
          console.log(user);
           this.props.userLogin(user);
        }})
  }

  render() {
    return (
      <LoginForm
        onLogin={this.handleLogin}
        onUserNameInputChange={this.handleUserName}
        onPasswordIntputChange={this.handlePassword}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log('mapped!');
  return {
   users: state.users
 };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(
     {attemptLogin,
      userLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

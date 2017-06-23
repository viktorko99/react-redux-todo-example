import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../actions/actions';
import LoginForm from '../components/Login/LoginForm';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUserInput(event) {
   const { id, value } = event.target;
    this.setState({
        [id]: value
    });
  }

  handleUserName(event) {
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
        this.props.history.push('/profile');
    }})
  }

  render() {
    return (
      <LoginForm
        onLogin={this.handleLogin}
        onUserNameInputChange={this.handleUserName}
        onPasswordIntputChange={this.handlePassword}
        onUserInput={this.handleUserInput}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log(state.users);
  return {
    users: state.users
  };
}

//two kinds of dispatching actions
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({userLogin}, dispatch);
// }
const mapDispatchToProps = {
  userLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

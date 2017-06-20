import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogout, userLogin, updateUser} from '../actions/actions';
import ProfileComponent from '../components/Profile/ProfileComponent';
import { clearState } from '../localStorage';

class Profile extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
    this.hadleClearState = this.hadleClearState.bind(this);
    this.handleSynchronize = this.handleSynchronize.bind(this);
    this.handleTodoRedirect = this.handleTodoRedirect.bind(this);
  }

  handleTodoRedirect() {
    this.props.history.push('/todo');
  }

  handleLogout() {
    this.props.userLogout();
  }

  handleSynchronize() {
    this.props.updateUser(this.props.user);
  }

  hadleClearState() {
    clearState();
  }

  render() {
    return (
      <ProfileComponent
        user={this.props.user}
        onLogout={this.handleLogout}
        onClear={this.hadleClearState}
        onSynchronize={this.handleSynchronize}
        onTodoRedirect={this.handleTodoRedirect}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({
     userLogout,
     userLogin,
     updateUser
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogout} from '../actions/actions';
import ProfileComponent from '../components/ProfileComponent';
import { clearState } from '../localStorage';

class Profile extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
    this.hadleClearState = this.hadleClearState.bind(this);
  }

  handleLogout() {
    this.props.userLogout();
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

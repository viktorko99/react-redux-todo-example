import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogout} from '../actions/actions';
import ProfileComponent from '../components/ProfileComponent';

class Profile extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.userLogout();
  }

  render() {
    return (
      <ProfileComponent
        user={this.props.user}
        onLogout={this.handleLogout}
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

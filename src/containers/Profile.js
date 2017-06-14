import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';

class Profile extends Component {
  constructor() {
    super();

  }

  render() {

    return (
      <ProfileComponent user={this.props.user}/>
    )
  }
}

function mapStateToProps(state) {
  return {
   user: state.activeUser
 };
}


export default connect(mapStateToProps)(Profile);

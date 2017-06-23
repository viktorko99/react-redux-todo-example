import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout, userLogin, updateUser, addMemo } from "../actions/actions";
import ProfileComponent from "../components/Profile/ProfileComponent";
import { clearState } from "../localStorage";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      memos: '',
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.hadleClearState = this.hadleClearState.bind(this);
    this.handleSynchronize = this.handleSynchronize.bind(this);
    this.handleTodoRedirect = this.handleTodoRedirect.bind(this);
    this.handleMemoAdd = this.handleMemoAdd.bind(this);
  }
  componentWillMount() {
    if (this.props.user !== null) {
      this.setState({
        memos: this.props.user.memos
      });
    }
  }

  handleTodoRedirect() {
    this.props.history.push("/todo");
  }

  handleMemoAdd() {
    const { memos } = this.state;
    this.props.addMemo(memos);
  }

  handleLogout() {
    this.props.updateUser(this.props.user);
    this.props.userLogout();
  }

  handleSynchronize(event) {
    const { value } = event.target;
    this.setState({
      memos: value
    });
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
        onMemoAdd={this.handleMemoAdd}
        memos={this.state.memos}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      userLogout,
      userLogin,
      updateUser,
      addMemo
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

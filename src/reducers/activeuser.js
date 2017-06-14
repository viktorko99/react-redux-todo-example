const activeUser = (state = null, action) => {
    switch (action.type) {

      case 'USER_LOGOUT':
        return null;

      case 'USER_LOGIN':
          return action.user;

      default:
        return state;
    }
}

export default activeUser;

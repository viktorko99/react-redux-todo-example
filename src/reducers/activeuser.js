const activeUser = (state = null, action) => {
    switch (action.type) {

      case 'ATTEMPT_LOGIN':
        return {
          first: action.first,
          password: action.password,
        };

      case 'USER_LOGIN':
          return action.user;

      default:
        return null;
    }
}

export default activeUser;

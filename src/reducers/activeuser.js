const activeUser = (state = null, action) => {
    switch (action.type) {

      case 'ATTEMPT_LOGIN':
        return {
          first: action.first,
          password: action.password,
        };

      case 'USER_LOGIN':
          return action.object;

      default:
        return null;
    }
}

export default todos;

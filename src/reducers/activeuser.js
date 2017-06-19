const activeUser = (state = null, action) => {
    switch (action.type) {

      case 'USER_LOGOUT':
        return null;

      case 'USER_LOGIN':
          return action.user;

          case 'ADD_NEWTODO':
              return {
                       ...action.user,
                       todos: [
                       ...action.user.todos,
                       {
                         text: action.text,
                         id: action.id,
                         completed: false
                       }
                    ]}
      default:
        return state;
    }
}

export default activeUser;

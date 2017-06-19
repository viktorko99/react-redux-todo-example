const users = (state = [], action) => {
    switch (action.type) {
      case 'ADD_USER':
        console.log(action.user);
          return [
            ...state,
            {
             ...action.user,
               id: action.id
            }
         ]
       case 'UPDATE_USER':
        return state.map(user =>
           (user.id === action.user.id)
           ? {...user, todos: action.user.todos}
           : user
         )

      default:
        return state;
    }
}

export default users;

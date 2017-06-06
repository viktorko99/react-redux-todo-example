const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
          console.log('action was made');
          return [
            ...state,
            {
              text: action.text,
              id: action.id,
              completed: false
            }
          ]
      case 'SET_TODO':
      return state.map(todo =>
      (todo.id === action.id)
        ? {...todo, completed: !todo.completed}
        : todo
      )
      default:
        return state;
    }

}

export default todos;

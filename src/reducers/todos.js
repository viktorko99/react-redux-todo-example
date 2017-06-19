const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEWTODO':
          return [
            ...state,
              {
                text: action.text,
                id: action.id,
                completed: false
              }
          ]

      case 'SET_ACTUALTODO':
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

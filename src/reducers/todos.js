const todos = (state = null, action) => {
    switch (action.type) {
      case 'ADD_TODO':
          return [...state];

      default:
        return state;
    }

}

export default todos;

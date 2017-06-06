const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
          console.log('action was made');
          return [
            ...state,
            {
              text: action.text,
              id: action.id
            }
          ]

      default:
        return state;
    }

}

export default todos;

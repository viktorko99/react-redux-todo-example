const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_USER':
          return [
            ...state,
              {
                id: action.id,
                first: action.first,
                last: action.last,
                password: action.password,
                age: action.age,
                description: action.description,
              }
          ]

      default:
        return state;
    }
}

export default todos;

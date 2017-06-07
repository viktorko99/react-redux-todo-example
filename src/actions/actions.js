let nextId = 0;
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text,
    id: nextId++
})

export const setTodo = (id) => ({
    type: 'SET_TODO',
    id
})

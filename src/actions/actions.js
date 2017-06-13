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

export const showActive = () => ({
    type: 'SHOW_ACTIVE'
})

export const showCompleted = () => ({
    type: 'SHOW_COMPLETED'
})

export const showAll = () => ({
    type: 'SHOW_ALL'
})

export const tryLogin = (name,password) => ({
    type: 'ATTEMPT_LOGIN',
    name,
    password
})

export const attemptLogin = (user) => ({
    type: 'ATTEMPT_LOGIN',
    user
})

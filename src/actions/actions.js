import { v4 } from 'uuid';
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text,
    id: v4(),
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

export const userLogout = () => ({
    type: 'USER_LOGOUT',
})

export const userLogin = (user) => ({
    type: 'USER_LOGIN',
    user
})

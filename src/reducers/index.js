import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import users from './users';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  users,
})

export default todoApp

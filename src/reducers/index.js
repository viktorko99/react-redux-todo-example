import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import users from './users';
import activeUser from './activeuser';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  users,
  activeUser,
})

export default todoApp

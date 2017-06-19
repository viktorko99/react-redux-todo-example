import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addNewTodo, setActualTodo, setVisibilityFilter} from '../actions/actions';
import TodoComponent from '../components/TodoComponent';
import LoginNotFound from '../components/LoginNotFound';

class TodoContainer extends Component {
  constructor() {
    super();

      this.handleActualTodoChange = this.handleActualTodoChange.bind(this);
      this.handleAddTodoChange = this.handleAddTodoChange.bind(this);
      this.handleShowAllClick = this.handleButtonClick.bind(this, 'SHOW_ALL');
      this.handleShowActiveClick = this.handleButtonClick.bind(this, 'SHOW_ACTIVE');
      this.handleShowCompletedClick = this.handleButtonClick.bind(this, 'SHOW_COMPLETED');
  }

  handleAddTodoChange(event) {
     if (event.key === 'Enter') {
     console.log('do validate');
     this.props.addNewTodo(event.target.value, this.props.user);
     event.target.value = '';
   }
  }

  handleActualTodoChange(todoID) {
    console.log(todoID);
    this.props.setActualTodo(todoID)
  }

  handleButtonClick(id) {
    this.props.setVisibilityFilter(id);
  }

  render() {
    if (this.props.user === null) {
      return <LoginNotFound />;
    }

    return (
      <div>
         <TodoComponent
           todos={this.props.todos}
           onAddTodoChange={this.handleAddTodoChange}
           onActualTodoChange={this.handleActualTodoChange}
           showActive={this.handleShowActiveClick}
           showCompleted={this.handleShowCompletedClick}
           showAll={this.handleShowAllClick}
         />
      </div>
    );
  }
}

 const handleVisibiltyfilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);

    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);

    case 'SHOW_ALL':
      return todos;

    default:
      return todos;
  }
}

  function mapStateToProps(state) {
    if (state.activeUser === null) {
      return {
       todos: [],
       user: state.activeUser
     };
    }
    return {
     todos: handleVisibiltyfilter(state.activeUser.todos, state.visibilityFilter),
     user: state.activeUser
   };
  }

  function mapDispatchToProps(dispatch) {
     return bindActionCreators(
       {addNewTodo,
        setActualTodo,
        setVisibilityFilter}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

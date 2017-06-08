import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo, setTodo, showActive, showCompleted, showAll} from '../actions/actions';
import TodoComponent from '../components/TodoComponent';

class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      actualTodo: '',
    }

    this.handleActualTodoChange = this.handleActualTodoChange.bind(this);
    this.handleAddTodoChange = this.handleAddTodoChange.bind(this);
    this.handleShowAllClick = this.handleButtonClick.bind(this, 'SHOW_ALL');
    this.handleShowActiveClick = this.handleButtonClick.bind(this, 'SHOW_ACTIVE');
    this.handleShowCompletedClick = this.handleButtonClick.bind(this, 'SHOW_COMPLETED');

  }

  handleAddTodoChange(event) {
     this.setState({
       actualTodo: event.target.value
     });
  }

  handleActualTodoChange(todoID) {
    this.props.setTodo(todoID)
  }

  handleButtonClick(id) {
    switch (id) {
      case 'SHOW_ALL':
        this.props.showAll();
        break;
      case 'SHOW_ACTIVE':
        this.props.showActive();
        break;
      case 'SHOW_COMPLETED':
        this.props.showCompleted();
        break;
      default:
        this.props.showAll();
    }
  }

  render() {
    return (
      <div>
         <TodoComponent
           todos={this.props.todos}
           addTodo={() => this.props.addTodo(this.state.actualTodo)}
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
    console.log(state.visibilityFilter);
    return {
     todos: handleVisibiltyfilter(state.todos, state.visibilityFilter)
   };
  }

  function mapDispatchToProps(dispatch) {
     return bindActionCreators(
       {addTodo: addTodo,
        setTodo: setTodo,
        showActive: showActive,
        showCompleted: showCompleted,
        showAll: showAll}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

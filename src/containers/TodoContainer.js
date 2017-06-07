import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo, setTodo, showActive, showCompleted} from '../actions/actions';
import TodoComponent from '../components/TodoComponent';

class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      actualTodo: '',
    }

    this.handleActualTodoChange = this.handleActualTodoChange.bind(this);
    this.handleAddTodoChange = this.handleAddTodoChange.bind(this);
  }

  handleAddTodoChange(event) {
     this.setState({
       actualTodo: event.target.value
     });
  }

  handleActualTodoChange(todoID) {
    this.props.setTodo(todoID)
  }

  render() {
    return (
      <div>
         <TodoComponent
           todos={this.props.todos}
           addTodo={() => this.props.addTodo(this.state.actualTodo)}
           onAddTodoChange={this.handleAddTodoChange}
           onActualTodoChange={this.handleActualTodoChange}
           showActive={() => this.props.showActive()}
           showCompleted={() => this.props.showCompleted()}
         />
      </div>
    );
  }
}

 const handleVisibiltyfilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.map(todo => !todo.completed);

    case 'SHOW_COMPLETED':
      return todos.map(todo => todo.completed);

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
        showCompleted: showCompleted}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

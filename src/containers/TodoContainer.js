import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo, setTodo} from '../actions/actions';
import TodoComponent from '../components/TodoComponent';

class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      actualTodo: '',
      clickedTodo: 0,
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
         />
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return {
     todos: state.todos
   };
  }

  function mapDispatchToProps(dispatch) {
     return bindActionCreators(
       {addTodo: addTodo,
        setTodo: setTodo}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

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
    this.handleClickedTodoChange = this.handleClickedTodoChange.bind(this);
  }

  handleActualTodoChange(event) {
     this.setState({
       actualTodo: event.target.value
     });
  }

  handleClickedTodoChange(todoID) {
    this.props.setTodo(todoID)
  }

  render() {
    console.log('----------------hey', this.props.todos)
    return (
      <div>
         <TodoComponent
           todos={this.props.todos}
           addTodo={() => this.props.addTodo(this.state.actualTodo)}
           onClickedTodoChange={this.handleClickedTodoChange}
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

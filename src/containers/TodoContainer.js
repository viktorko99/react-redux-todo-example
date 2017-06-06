import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';
import TodoComponent from '../components/TodoComponent';

class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      actualTodo: '',
    }

    this.handleActualTodoChange = this.handleActualTodoChange.bind(this);
  }

  handleActualTodoChange(event) {
     this.setState({
       actualTodo: event.target.value
     });
  }

  render() {
    return (
      <div>
         <TodoComponent
           todos={this.props.todos}
           addTodo={() => this.props.addTodo(this.state.actualTodo)}
           setTodo={() => this.props.setTodo()}
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
       {addTodo: addTodo}, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

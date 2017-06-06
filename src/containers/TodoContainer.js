import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';
import TodoComponent from '../components/TodoComponent';

function TodoContainer({todos, addTodo}) {
  return (
    <div>
       <TodoComponent
         todos={todos}
         addTodo={() => addTodo('ahoj')}
       />
    </div>
  );
}

function mapStateToProps(todos) {
  return (
   todos: state.todos
 );
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators(
     {addTodo: addTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

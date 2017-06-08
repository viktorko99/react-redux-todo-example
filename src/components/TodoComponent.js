import React from 'react';
import TodoListItem from './TodoListItem';
import {Button, FormGroup, FormControl} from 'react-bootstrap';

function TodoComponent({todos, addTodo, onActualTodoChange, onAddTodoChange, showActive, showCompleted, showAll}){

  return(
    <div>
      <input onChange={onAddTodoChange} type="text"/>
      <Button onClick={addTodo} bsSize="small">Add</Button>

      <ul>
        {todos.map(todo => (

          <TodoListItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            todoID={todo.id}
            onActualTodoChange={onActualTodoChange}
          />
         ))}
      </ul>

      <div>
         <button onClick={showAll}>Show all</button>
         <button onClick={showActive}>Show active</button>
         <button onClick={showCompleted}>Show completed</button>
      </div>
  </div>

  )
}

export default TodoComponent;

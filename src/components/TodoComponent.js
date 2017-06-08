import React from 'react';
import TodoListItem from './TodoListItem';
import TodoInputItem from './TodoInputItem';
import {Button} from 'react-bootstrap';

function TodoComponent({todos, addTodo, onActualTodoChange, onAddTodoChange, showActive, showCompleted, showAll}){

  return(
    <div>
        <TodoInputItem
          onAddTodoChange={onAddTodoChange}
          addTodo={addTodo}
        />

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
         <Button onClick={showAll}>Show all</Button>
         <Button onClick={showActive}>Show active</Button>
         <Button onClick={showCompleted}>Show completed</Button>
      </div>
  </div>

  )
}

export default TodoComponent;

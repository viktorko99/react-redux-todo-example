import React from 'react';
import TodoListItem from './TodoListItem';

function TodoComponent({todos, addTodo, onActualTodoChange, onAddTodoChange, showActive, showCompleted}){

  return(
    <div>
      <input onChange={onAddTodoChange} type="text"/>
      <button onClick={addTodo}>add</button>

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
         <button>Show all</button>
         <button onClick={showActive}>Show active</button>
         <button onClick={showCompleted}>Show completed</button>
      </div>
  </div>

  )
}

export default TodoComponent;

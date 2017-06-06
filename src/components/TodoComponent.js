import React from 'react';
import TodoListItem from './TodoListItem';

function TodoComponent({todos, addTodo, onActualTodoChange, onClickedTodoChange}){

  return(
    <div>
      <input onChange={onActualTodoChange} type="text"/>
      <button onClick={addTodo}>add</button>

      <ul>
        {todos.map(todo => (

          <TodoListItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            todoID={todo.id}
            setTodo={onClickedTodoChange}
          />
         ))}
      </ul>
  </div>

  )
}

export default TodoComponent;

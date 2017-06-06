import React from 'react';
import TodoListItem from './TodoListItem';

function TodoComponent({todos, addTodo, onActualTodoChange}){
  return(
    <div>
      <input onChange={onActualTodoChange} type="text"/>
      <button onClick={addTodo}>add</button>

      <ul>
        {todos.map(todo => (<TodoListItem
          text={todo.text}
          key={todo.id}
          />
        ))}
      </ul>
  </div>

  )
}

export default TodoComponent;

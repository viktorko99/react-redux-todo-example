import React from 'react';
import TodoListItem from './TodoListItem';
import TodoInputItem from './TodoInputItem';
import Center from 'react-center';

function TodoComponent({todos, addTodo, onActualTodoChange, onAddTodoChange, showActive, showCompleted, showAll}){

  return(
    <div>
      <Center>
          <TodoInputItem
            onAddTodoChange={onAddTodoChange}
            addTodo={addTodo}
            showActive={showActive}
            showCompleted={showCompleted}
            showAll={showAll}
          />
      </Center>
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
  </div>

  )
}

export default TodoComponent;

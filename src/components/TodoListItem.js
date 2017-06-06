import React from 'react';

function TodoListItem(props) {
  const { setTodo, todoID, text, completed } = props;

  console.log(props)
  return (
    <li
      onClick={() => setTodo(todoID)}
      id={todoID}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
  );
}

export default TodoListItem;

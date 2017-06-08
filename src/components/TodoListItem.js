import React from 'react';

function TodoListItem(props) {
  const {  onActualTodoChange, todoID, text, completed } = props;

  console.log(props)
  return (
    <li
      onClick={() =>  onActualTodoChange(todoID)}
      id={todoID}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
        {text}
    </li>
  );
}

export default TodoListItem;

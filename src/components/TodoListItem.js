import React from 'react';

function TodoListItem(props) {
    if (!props.completed) {
      console.log('i am not completed');
    }

    return (
      <li onClick={props.onClick}
    style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
        {props.text}
      </li>
    );
}

export default TodoListItem;

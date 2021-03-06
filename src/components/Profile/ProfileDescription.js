import React from 'react';
import { Button } from 'react-bootstrap';

function ProfileDescription({ user, onLogout, onClear, onTodoRedirect, onMemoAdd }){
  const divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
  };

  return(
    <div style={divStyle}>

      <h1>{user.first} {user.last}</h1>
      <h4>Description: {user.description}</h4>
      <p>Age: {user.age}</p>
      <Button onClick={onLogout} bsStyle="danger">Log Out</Button>
      {' '}
      {(user.first === 'admin') && <Button onClick={onClear} bsStyle="warning">HACK</Button>}
      {' '}
      <Button onClick={onTodoRedirect}>Todos</Button>
      {' '}
      <Button bsStyle="success" onClick={onMemoAdd}>Save Memos</Button>

   </div>
  )
}

export default ProfileDescription;

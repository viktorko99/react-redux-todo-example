import React from 'react';
import LoginNotFound from './LoginNotFound';
import { Button } from 'react-bootstrap';

function ProfileComponent({ user, onLogout, onClear }){
  const divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
  };

  if (user === null) {
    return <LoginNotFound />;
  }
  console.log(user);
  return(
    <div style={divStyle}>
      <h1>{user.first} {user.last}</h1>
      <h4>Description: {user.description}</h4>
      <p>Age: {user.age}</p>
      <Button onClick={onLogout} bsStyle="danger">Log Out</Button>
      {' '}
      {(user.first === 'admin') && <Button onClick={onClear} bsStyle="warning">HACK</Button> }
   </div>


  )
}

export default ProfileComponent;

import React from 'react';
import LoginNotFound from './LoginNotFound';
import { Image, Button } from 'react-bootstrap';

function ProfileComponent({ user, onLogout }){
  const divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
  };

  if (user === null) {
    return <LoginNotFound />;
  }

  return(
    <div style={divStyle}>
    <Image src={user.thumbnail} responsive />
        <h1>{user.first} {user.last}</h1>
      <h4>Description: {user.description}</h4>
      <p>Age: {user.age}</p>
      <Button onClick={onLogout} bsStyle="danger">Log Out</Button>
   </div>


  )
}

export default ProfileComponent;

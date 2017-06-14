import React from 'react';
import NotFound from './NotFound';
import { Image } from 'react-bootstrap';

function ProfileComponent({user, }){
  const divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
  };

  if (user === null) {
    return <NotFound />;
  }

  return(
    <div style={divStyle}>
    <Image src={user.thumbnail} responsive />
        <h1>{user.first} {user.last}</h1>
      <h4>Description: {user.description}</h4>
      <p>Age: {user.age}</p>


   </div>

  )
}

export default ProfileComponent;

import React from 'react';
import NotFound from './NotFound';

function ProfileComponent({user, }){
  if (user === null) {
    return <NotFound />;
  }

  return(
    <div>
      <h1>{user.first} {user.last}</h1>
      <h4>Description: {user.description}</h4>
      <p>Age: {user.age}</p>
      <img src={user.thumbnail} alt="user" width="200" height="200" />
   </div>

  )
}

export default ProfileComponent;

import React from 'react';
import LoginNotFound from '../ErrorPages/LoginNotFound';
import ProfileDescription from './ProfileDescription';
import ProfileTable from './ProfileTable';

function ProfileComponent({ user, onLogout, onClear, onSynchronize }){

  if (user === null) {
    return <LoginNotFound />;
  }

  return(
    <div>
      <ProfileDescription
        user={user}
        onLogout={onLogout}
        onClear={onClear}
        onSynchronize={onSynchronize}
      />

      <ProfileTable user={user}/>
    </div>
  )
}

export default ProfileComponent;

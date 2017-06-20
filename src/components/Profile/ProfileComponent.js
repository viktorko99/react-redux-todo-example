import React from 'react';
import LoginNotFound from '../ErrorPages/LoginNotFound';
import ProfileDescription from './ProfileDescription';
import ProfileTable from './ProfileTable';

function ProfileComponent({ user, onLogout, onClear, onSynchronize, onTodoRedirect }){

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
        onTodoRedirect={onTodoRedirect}
      />

      <ProfileTable user={user}/>
    </div>
  )
}

export default ProfileComponent;

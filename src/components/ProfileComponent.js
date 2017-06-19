import React from 'react';
import LoginNotFound from './LoginNotFound';
import ProfileDescription from './ProfileDescription';
import ProfileTodo from './ProfileTodo';

function ProfileComponent({ user, onLogout, onClear, onSynchronize }){

  if (user === null) {
    return <LoginNotFound />;
  }
  console.log(user);
  return(
    <div>
      <ProfileDescription
        user={user}
        onLogout={onLogout}
        onClear={onClear}
        onSynchronize={onSynchronize}
      />

      <ul>
        {user.todos.map(todo => (

          <ProfileTodo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
         ))}
      </ul>


    </div>
  )
}

export default ProfileComponent;

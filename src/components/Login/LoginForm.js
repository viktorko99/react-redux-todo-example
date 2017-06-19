import React from 'react';
import Center from 'react-center';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

function LoginForm({onLogin, onUserNameInputChange, onPasswordIntputChange, onUserInput}) {
  return (
    <div>
      <Center>
        <h1>Login</h1>
      </Center>

      <Center>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Name" id="userName" onChange={onUserInput}/>
          <FormControl id="password" label="Password" type="password"  placeholder="Password" onChange={onUserInput}/>
        </FormGroup>
      </Center>

      <Center>
        <Button onClick={onLogin}>Log In</Button>
      </Center>
    </div>
  );
}

export default LoginForm;

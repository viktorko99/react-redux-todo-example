import React from 'react';
import Center from 'react-center';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

function LoginForm({onLogin, onUserNameInputChange, onPasswordIntputChange}) {
  return (
    <div>
      <Center>
        <h1>Login</h1>
      </Center>

      <Center>
        <FormGroup bsSize="large">
          <FormControl type="text" placeholder="Name" onChange={onUserNameInputChange}/>
          <FormControl id="formControlsPassword" label="Password" type="password"  placeholder="Password" onChange={onPasswordIntputChange}/>
        </FormGroup>
      </Center>

      <Center>
        <Button onClick={onLogin}>Log In</Button>
      </Center>
    </div>
  );
}

export default LoginForm;

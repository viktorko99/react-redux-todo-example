import React, {Component} from 'react';
import Center from 'react-center';
import {FormGroup, FormControl, Button} from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <Center>
          <h1>Login</h1>
        </Center>

        <Center>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Name" />
            <FormControl id="formControlsPassword" label="Password" type="password"  placeholder="Password"/>
          </FormGroup>
        </Center>

        <Center>
          <Button>Login</Button>
        </Center>

      </div>
    );
  }
}

export default Login;

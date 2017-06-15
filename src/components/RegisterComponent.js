import React from 'react';
import { FormGroup, FormControl, Button} from 'react-bootstrap';
import Center from 'react-center';

export default function RegisterComponent({  onFirstNameAdd, onLastNameAdd, onAgeAdd, onDescriptionAdd, onPasswordAdd, onButtonClick}) {

  return (
    <div>
      <Center><h1>Register</h1></Center>

      <FormGroup bsSize="large">
          <Center>
          <FormControl style={{margin: '7px'}} type="text" placeholder="First Name" onChange={onFirstNameAdd} />
          <FormControl style={{margin: '7px'}} type="text" placeholder="Last Name" onChange={onLastNameAdd}/>
          </Center>
          <FormControl style={{margin: '7px'}} type="text" placeholder="Age" onChange={onAgeAdd}/>
          <FormControl style={{margin: '7px'}} id="formControlsPassword" label="Password" type="password"  placeholder="Password" onChange={onPasswordAdd}/>
          <FormControl style={{margin: '7px'}} type="text" placeholder="Description" onChange={onDescriptionAdd}/>
      </FormGroup>


        <Center>
          <Button bsStyle="primary" bsSize="large" onClick={onButtonClick}>Register Now!</Button>
        </Center>
      </div>
  )
}

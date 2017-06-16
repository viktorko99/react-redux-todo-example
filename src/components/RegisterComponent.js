import React from 'react';
import { FormGroup, FormControl, Button} from 'react-bootstrap';
import Center from 'react-center';
import '../styles/styles.css';

export default function RegisterComponent({  onFirstNameAdd, onLastNameAdd, onAgeAdd, onDescriptionAdd, onPasswordAdd, onButtonClick}) {

  return (
    <div>
      <Center><h1>Register</h1></Center>

      <FormGroup bsSize="large">
          <Center>
          <FormControl style={{margin: '7px'}} type="text" placeholder="First Name" onChange={onFirstNameAdd} required/>
          <FormControl style={{margin: '7px'}} type="text" placeholder="Last Name" onChange={onLastNameAdd} required/>
          </Center>
          <FormControl style={{margin: '7px'}} className="inputt" type="text" placeholder="Age" onChange={onAgeAdd} required/>
          <FormControl style={{margin: '7px'}} id="formControlsPassword" type="password"  placeholder="Password" onChange={onPasswordAdd} required/>
          <FormControl style={{margin: '7px'}} type="text" placeholder="Description" onChange={onDescriptionAdd}/>
      </FormGroup>

      <h1 className="text">Hello</h1>

        <Center>
          <Button bsStyle="primary" bsSize="large" onClick={onButtonClick}>Register Now!</Button>
        </Center>
      </div>
  )
}

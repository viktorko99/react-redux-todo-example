import React from 'react';
import { FormGroup, FormControl, Button} from 'react-bootstrap';
import Center from 'react-center';
import '../../styles/styles.css';
import {inputStyle} from '../../styles/styles';

export default function RegisterComponent({  onFirstNameAdd, onLastNameAdd, onAgeAdd, onDescriptionAdd, onPasswordAdd, onButtonClick, onUserAdd }) {

  return (
    <div>
      <Center><h1>Register</h1></Center>

      <FormGroup bsSize="large">
          <Center>
          <FormControl style={inputStyle} type="text" placeholder="First Name" id="first" onChange={onUserAdd} required/>
          <FormControl style={inputStyle} type="text" placeholder="Last Name" id="last" onChange={onUserAdd} required/>
          </Center>
          <FormControl style={inputStyle} className="inputt" type="text" placeholder="Age" id="age" onChange={onUserAdd} required/>
          <FormControl style={inputStyle} id="password" type="password"  placeholder="Password" onChange={onUserAdd} required/>
          <FormControl style={inputStyle} type="text" placeholder="Description" id="description" onChange={onUserAdd}/>
      </FormGroup>

      <h1 className="text">Hello</h1>

        <Center>
          <Button bsStyle="primary" bsSize="large" onClick={onButtonClick}>Register Now!</Button>
        </Center>
      </div>
  )
}

import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default function WelcomePageComponent({onToLoginAdress, onToRegisterAdress, divStyle}) {

  return (
    <Jumbotron >
      <div style={divStyle}>
        <h1>Todo-list, refined!</h1>
        <p>Enjoy the beautiness of React and Redux </p>
        <p>Click on button to register or login</p>
        <div style={{margin: "5px"}}>
        <Button bsStyle="info" onClick={onToLoginAdress}>Login</Button>
        <Button bsStyle="primary" onClick={onToRegisterAdress}>Register</Button>
       </div>
      </div>
    </Jumbotron>
  )
}

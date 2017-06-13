import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export default function WelcomePageComponent({onAdressChange}) {

  const divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
  };

  return (
    <Jumbotron >
      <div style={divStyle}>
        <h1>Todo-list, refined!</h1>
        <p>Enjoy the beautiness of React and Redux </p>
        <p>Click on button to learn more</p>
        <p><Button bsStyle="success" onClick={onAdressChange}>Learn more</Button></p>
      </div>
    </Jumbotron>
  )
}

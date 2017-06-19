import React from 'react';
import ProfileTodo from './ProfileTodo';
import { Grid, Row, Col, Panel , FormGroup, FormControl } from 'react-bootstrap';

function ProfileTable({user}) {
  return (
    <Grid>
      <Row className="show-grid">

        <Col sm={6} md={3}>
          <Panel collapsible defaultExpanded header="Active Todos">
            {user.todos.map(todo => (
              <ProfileTodo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
             ))}
          </Panel>
        </Col>

        <Col sm={6} md={3}>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" placeholder="Place for memos.." />
          </FormGroup>
        </Col>

      </Row>
    </Grid>
  );
}

export default ProfileTable;

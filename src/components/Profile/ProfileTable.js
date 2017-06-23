import React from 'react';
import ProfileTodo from './ProfileTodo';
import { Grid, Row, Col, Panel , FormGroup, FormControl } from 'react-bootstrap';

function ProfileTable({ todos, onSynchronize, memos }) {
  return (
    <Grid>
      <Row className="show-grid">

        <Col sm={6} md={4}>
          <Panel collapsible defaultExpanded header="Active Todos">
            {todos.map(todo => (
              <ProfileTodo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
             ))}
          </Panel>
        </Col>

        <Col sm={6} md={8}>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea"  rows="17" value={memos} onChange={onSynchronize} />
          </FormGroup>
        </Col>

      </Row>
    </Grid>
  );
}

export default ProfileTable;

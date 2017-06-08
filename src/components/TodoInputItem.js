import React from 'react';
import {Radio, FormGroup, FormControl} from 'react-bootstrap';

function TodoInputItem({onAddTodoChange, addTodo, showActive, showCompleted, showAll}) {

  return (
        <FormGroup bsSize="large">
            <FormControl  onKeyPress={onAddTodoChange} type="text" placeholder="Large text" />

            <div>
              <Radio onChange={showAll} name="radioGroup" inline>
                Show All
              </Radio>
              {' '}
              <Radio onChange={showActive} name="radioGroup" inline>
                Show Active
              </Radio>
              {' '}
              <Radio onChange={showCompleted} name="radioGroup" inline>
                Show Completed
              </Radio>
          </div>
        </FormGroup>
  );
}

export default TodoInputItem;

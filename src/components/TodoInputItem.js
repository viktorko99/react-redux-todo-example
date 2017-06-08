import React from 'react';
import {Tabs, Tab, FormGroup, FormControl} from 'react-bootstrap';

function TodoInputItem({onAddTodoChange, addTodo}) {

  return (
      <div>
        <Tabs defaultActiveKey={1} animation={true} id="noanim-tab-example">
        <Tab eventKey={1} title="Show All"/>
        <Tab eventKey={2} title="Show Active"/>
        <Tab eventKey={3} title="Show Completed"/>
        </Tabs>

        <FormGroup bsSize="large">
              <FormControl  onKeyPress={onAddTodoChange} type="text" placeholder="Large text" />
        </FormGroup>
     </div>
  );
}

export default TodoInputItem;

import React from 'react';
import TodoContainer from '../containers/TodoContainer';
import {PageHeader} from 'react-bootstrap';

const App = () => (
  <div>
     <PageHeader>Todo List</PageHeader>
    <TodoContainer />
  </div>
)

export default App

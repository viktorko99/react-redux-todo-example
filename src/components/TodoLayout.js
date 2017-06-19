import React from 'react';
import TodoContainer from '../containers/TodoContainer';
import {PageHeader} from 'react-bootstrap';
import Center from 'react-center';

const TodoLayout = () => (
  <div>
    <Center>
     <PageHeader>Todo List</PageHeader>
   </Center>
    <TodoContainer />
  </div>
)

export default TodoLayout

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './containers/Routers'
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    //todos: store.getState().todos,
    activeUser: store.getState().activeUser
  });
});

render(
  <Provider store={store}>
    <Router>
      <Routers/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

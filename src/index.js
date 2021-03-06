import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import EventIndex from './components/event_index';
import reducer from './reducer'
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventIndex />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

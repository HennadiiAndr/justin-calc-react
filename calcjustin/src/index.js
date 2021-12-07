import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';


const enhancers = [applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]

const store = createStore(
   allReducers,
   compose(...enhancers)
);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.querySelector('#root')
)
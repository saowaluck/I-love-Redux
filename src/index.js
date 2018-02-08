// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// // ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux'

const initialState = {
    name: 'xxx',
    sourcetype: 'supersat',
    datas: ['xxx']
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD":
      state = {
        name: action.name,
        type: action.sourcetype,
        datas: [
          ...state.datas,
          action.name
        ],
      }
      break
    case "REMOVE":
      state = {
        name: action.name,
        type: action.sourcetype,
        datas: state.datas.filter((data) => data !== action.name)
      }
      break
    default:
  }
  return state
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log("update store", store.getState())
})

store.dispatch({
  type: 'ADD',
  name: 'yyy',
  sourcetype: 'database'
})

store.dispatch({
  type: 'ADD',
  name: 'reseller',
  sourcetype: 'supersat'
})

store.dispatch({
  type: 'REMOVE',
  name: 'reseller',
  sourcetype: 'supersat'
})

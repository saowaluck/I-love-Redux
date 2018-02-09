import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

const initialState = {
  id: 1,
  status: 'Active',
  price: 20,
  time: 50,
  machines:[]
}
const machineReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addMachine':
      state = {
        ...state,
        id: action.payload.id,
        status: action.payload.status,
        price: action.payload.price,
        time: action.payload.time,
        machines: [
          ...state.machines,
          action.payload.id,
        ]
      }
      break

    case 'removeMachine':
      state = {
        ...state,
        id: action.payload.id,
        status: action.payload.status,
        price: action.payload.price,
        time: action.payload.time,
        machines: state.machines.filter((each) => each !== action.payload.id)
      }
      break

    default:
      break
  }
  return state
}

const store = createStore(combineReducers({machine:machineReducer}))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById('root'))
registerServiceWorker()

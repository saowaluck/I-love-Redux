import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
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
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addMachine':
      state = {
        ...state,
        id: action.id,
        status: action.status,
        price: action.price,
        time: action.time,
        machines: [
          ...state.machines,
          action.id,
        ]
      }
      break

    case 'removeMachine':
      state = {
        ...state,
        id: action.id,
        status: action.status,
        price: action.price,
        time: action.time,
        machines: state.machines.filter((each) => each !== action.id)
      }
      break

    default:
      break
  }
  return state
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
document.getElementById('root'))
registerServiceWorker()

import { createStore } from 'redux'

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

store.subscribe(() =>{
  console.log(store.getState())
})

store.dispatch({
  type: 'addMachine',
  id: 3,
  status: 'Inactive',
  price: 20,
  time: 50,
})

store.dispatch({
  type: 'addMachine',
  id: 2,
  status: 'Inactive',
  price: 20,
  time: 50,
})

store.dispatch({
  type: 'removeMachine',
  id: 2,
  status: 'Inactive',
  price: 20,
  time: 50,
})

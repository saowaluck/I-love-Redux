import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addMachine(4, 'active', 80, 60)
    console.log(e.target)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Machine</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>{this.props.machine.id}</li>
          <li>{this.props.machine.status}</li>
          <li>{this.props.machine.price}</li>
          <li>{this.props.machine.time}</li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='id' />
          <input type="text" name='status' />
          <input type="text" name='price' />
          <input type='text' name='time' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  machine: state.machine
})

const mapDispatchtoProps = (dispatch) => ({
  addMachine:(id, status, price, time) => {
    dispatch({
      type:"addMachine",
      payload:{
        id, status, price,time,
      }
    })
  }
})

export default connect (mapStateToProps,mapDispatchtoProps)(App)

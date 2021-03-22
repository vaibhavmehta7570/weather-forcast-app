import React, { Component } from 'react'

class Counter extends Component {
  state = {
    value: 0
  }

  decrementCounter = () => {
    this.setState({ value: this.state.value - 1 })
  }
  resetCounter = () => {
    this.setState({ value: 0 })
  }
  incrementCounter = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <div className="counter-app">
        <section className="counter-value">{this.state.value}</section>
        <section className="icon-panel">
          <button
            className="btn btn-green"
            onClick={this.incrementCounter}
          ></button>
          <button
            className="btn btn-orange"
            onClick={this.resetCounter}
          ></button>
          <button
            className="btn btn-red"
            onClick={this.decrementCounter}
          ></button>
        </section>
      </div>
    )
  }
}

export default Counter

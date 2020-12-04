import React, { Component } from 'react';

const App = () => (<Continer></Continer>)
class Continer extends Component {
  constructor(props) {
    super(props)
    this.state = { count:0 }
    console.log(props)
  }
  handlePlus = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleMinus = () => {
    this.setState({ count: this.state.count - 1})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div>count : { this.state.count }</div>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </div>
    )
  }
}
export default App;

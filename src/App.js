import React from 'react';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Sachin'
    };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Component Did Mount {this.state.name}</h1>
        <button onClick={() => this.setState({ name: 'Shukla' })}>
          Update Name
        </button>
      </div>
    );
  }
}

export default App;

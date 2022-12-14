import NavBar from './components/navbar';
import Counters from './components/counters'
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.property;
    console.log('App - Constructor');
  }

  handleReset = ()=> {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({ counters })
}

handleDelete = counterId => {
    const counters = this.state.counters.filter(c=> c.id !== counterId);
    this.setState({counters: counters})
console.log('Event handler called', counterId);
};

handleIncrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[0].value++;
  this.setState({ counters })
};

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[0].value--;
  this.setState({ counters })
};

  render() {
  return (
    <React.Fragment>
      <NavBar 
        totalCounters = {this.state.counters.filter(c => c.value > 0).length}
      />
      <main className="container">
        <Counters
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          OnDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete} 
        />
      </main>
    </React.Fragment>
  );
}
}

export default App;

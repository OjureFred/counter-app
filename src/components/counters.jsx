import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
     } 
    render() { 
        
        return (
            <div>
                <button onClick={this.handleReset}
                className="btn btn-primary btn-sm m2">Reset</button>
                {this.state.counters.map(counter => <Counter 
                key = {counter.id} 
                onDelete = {this.handleDelete()}
                onIncrement = {this.handleIncrement}
                counter = { counter }
                />)}
            </div>
        );
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
    counter[0].value+ 1;
    console.log(this.state.counters[0])
}

}


 
export default Counters;
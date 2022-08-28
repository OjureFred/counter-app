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
            <React.Fragment>
                <button onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                <Counter 
                    key = {counter.id} 
                    onDelete = {this.props.onDelete()}
                    onIncrement = {this.props.onIncrement}
                    counter = { counter }
                />))}
            </React.Fragment>
        );
    }

    

}


 
export default Counters;
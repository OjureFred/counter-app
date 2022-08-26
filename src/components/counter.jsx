import React, { Component } from 'react';


class Counter  extends React.Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200'
      };
    
    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? <h1>zero</h1> : count;
    }
    render() {
        let classes = this.getBadgeClasses();
        return (
        <div>
            <img src={this.state.imageUrl} alt="" />
            <span style = {this.style} className={ this.getBadgeClasses() }>
                {this.formatCount()}
            </span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
                {this.state.tags.map( tag => <li>{ tag }</li>)}
            </ul>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;
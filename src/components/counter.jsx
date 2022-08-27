import React, { Component } from 'react';


class Counter  extends React.Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200'
      };
    
    constructor() {
        super()
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    
    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? <h3>zero</h3> : count;
    }
    render() {
        let classes = this.getBadgeClasses();
        return (
        <div>
            <img src={this.state.imageUrl} alt="" />
            
            <span style = {this.style} className={ this.getBadgeClasses() }>
                
            </span>
            <p>{this.formatCount()}</p>
            <button onClick= {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <div>
            

                {this.state.tags.length === 0 && "Please create a new tag!" }
                {this.renderTags()}
            </div>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
        return <ul>{this.state.tags.map( tag => <li key={tag}>{ tag }</li>)}</ul>
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
}
}
export default Counter;
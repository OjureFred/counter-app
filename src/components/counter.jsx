import React, { Component } from 'react';



class Counter  extends React.Component {
     
    constructor() {
        super()
        this.handleIncrement = this.handleIncrement.bind(this)
    }
    
    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    }

    formatCount(){
        const { count } = this.props.Counter
        return count === 0 ? <h3>zero</h3> : count;
    }
    render() {
        console.log('props', this.props)
        let classes = this.getBadgeClasses();
        return (
        <div>
            <img src={this.state.imageUrl} alt="" />
            {this.props.children}
            <span style = {this.style} className={ this.getBadgeClasses() }>
                
            </span>
            <p>{this.formatCount()}</p>
            <button onClick= {() => this.props.onIncrement} className="btn btn-secondary btn-sm">+</button>
            <button onClick= {() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">-</button>
            <button onClick={()=>this.props.onDelete(this.props.Counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
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

   
}
export default Counter;
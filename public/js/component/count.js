
import React, { Component } from 'react'

class Counter extends Component {

    increment(){
     this.props.onAdd();
    }

    decrement(){
       this.props.onCut();
    }

    render() {
        return (
            <p>
                Clicked: {this.props.counter} times
                {' '}
                <button onClick={this.increment.bind(this)}>+</button>
                {' '}
                <button onClick={this.decrement.bind(this)}>-</button>
            </p>
        )
    }
}

export default Counter;
import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//Function that returns a Higher order component we use during component export 
import { connect } from 'react-redux';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstract}  />
            </div>
        );
    }
}

// Store state
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}

// Store modification logicc
const mapDispatchToProps = dispatch => {
    return {
        // Calling this will execute dispatch functin
        onIncrementCounter: () => {
            dispatch({type: 'INCREMENT'})
        },
        onDecrementCounter: () => {
            dispatch({type: 'DECREMENT'})
        },
        onAdd: () => {
            dispatch({type: 'ADD', value: 5})
        },
        onSubstract: () => {
            dispatch({type: 'SUB', value: 5})
        }
    }
}

// Below line creates a component
// Takes mapStateToProps as parameter
// The parameers can then be used as props in the container
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
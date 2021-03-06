import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
//Function that returns a Higher order component we use during component export 
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/actions';
import * as actionCreator from '../../store/actions/index';

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
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    { this.props.storedResults.map(result => (
                        <li key={result.id} onClick={()=>this.props.onDeleteResult(result.id)}> {result.value} </li>
                    )) 
                    }
                </ul>
            </div>
        );
    }
}

// Store state
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

// Store modification logicc
const mapDispatchToProps = dispatch => {
    return {
        // Calling this will execute dispatch functin
        onIncrementCounter: () => {
            dispatch(actionCreator.increment())
        },
        onDecrementCounter: () => {
            dispatch(actionCreator.decrement())
        },
        onAdd: () => {
            dispatch(actionCreator.add(5))
        },
        onSubstract: () => {
            dispatch(actionCreator.sub(5))
        },
        onStoreResult: (result) => {
            // Here we will need to provide the rest as the reducer doesnt have direct access t it
            dispatch(actionCreator.storeResult(result))
        },
        onDeleteResult: (id) => {
            dispatch(actionCreator.deleteResult(id))
        }
    }
}

// Below line creates a component
// Takes mapStateToProps as parameter
// The parameers can then be used as props in the container
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React, { Component } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            initialValue: 0
        }
    }

    increment(){
        const actualValue = this.state.initialValue
        if(actualValue === 5){
            console.log('Llegaste al stock máximo');
            alert('No hay mas stock');
            return;
        }
       this.setState({initialValue: actualValue + 1}) 
    }

    decrement(){
        const actualValue = this.state.initialValue
        if(actualValue === 0){
            console.log('Llegaste al stock minimo');
            alert('No puedes restar por menos de 0');
            return;
        }
       this.setState({initialValue: actualValue - 1}) 
    }

    render() {

        const {initialValue} = this.state;
        const {developer} = this.props;
        return (
            <>
                <hr/>
                <h3>Counter: {initialValue}</h3>
                <button onClick={() => this.increment()}>Incrementar</button>
                <button onClick={() => this.decrement()}>Decrementar</button>
                <p onMouseOver={() => console.log('%c Hiciste mouse over', 'background: red')}>El developer es {developer}</p>
            </>
        );
    }
}

export default Counter;

import React from 'react';

const CounterComponent = ({ counter, addToCounter}) => (
    <div>
        <p>
           counter: 
        {counter}
        </p>
        <button type="button" onClick={() => addToCounter(1)}>
        +1 to global
        </button>
    </div>
)

export default CounterComponent;
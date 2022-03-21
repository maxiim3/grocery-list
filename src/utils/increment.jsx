import React from 'react';

const Increment = (props) => {
    const { number, onIncrement, onDecrement } = props;

    return (

        <React.Fragment>
            <input type="number" placeholder={number} value={number}/>
            <button onClick={() => onIncrement()} type="button" className="btn btn-sm btn-light">+</button>
            <button onClick={() => onDecrement()} type="button" className="btn btn-sm btn-light">-</button>
        </React.Fragment>
        
    );
};

export default Increment;

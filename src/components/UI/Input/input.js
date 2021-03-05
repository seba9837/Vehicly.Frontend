import React from 'react';

import './input.css';

const input = props => {
    let inputForm = null;

    switch (props.elementType) {
        case ('input'):
            inputForm = <input
                className='input'
                {...props.elementAttributes}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case ('select'):
            inputForm = <select
                className='input'
                {...props.elementAttributes}
                value={props.value}
                onChange={props.changed}>
                {props.elementAttributes?.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option?.displayValue}
                    </option>
                ))}
            </select>
            break;
        default:
            inputForm = <input
                className='input'
                {...props.elementAttributes}
                value={props.value}
                onChange={props.changed}
            />
            break;
    }

    return (
        <div className='inputForm'>
            <label>{props.label}</label>
            {inputForm}
        </div>
    )
}

export default input;
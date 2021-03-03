import React from 'react';

const input = props => {
    let inputForm = null;

    switch(props.elementType) {
        case('input'):
            inputForm = <input
                {...props.elementAttributes}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case('select'):
            inputForm = <select
            {...props.elementAttributes}
            value={props.value}
            onChange={props.changed}>
                {props.elementAttributes.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            break;
        default:
            inputForm = <input
                {...props.elementAttributes}
                value={props.value}
                onChange={props.changed}
            />
            break;          
    }

    return(
        <div>
            <label>{props.label}</label>
            {inputForm}
        </div>
    )
}

export default input;
import React from 'react';

import './input.css';
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles({
    icon: {
        fill: '#3f72af',
        margin: 'auto',
        height: '30px',
        width: '30px'
    }
});

const Input = props => {
    const classes = useStyles();
    let inputForm = null;
    let inputIcon = null;

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

    switch (props.iconType) {
        case ('EmailIcon'):
            inputIcon = <EmailIcon className={classes.icon} />
            break;
        case ('LockIcon'):
            inputIcon = <LockIcon className={classes.icon} />
            break;
        case ('AccountCircleIcon'):
            inputIcon = <AccountCircleIcon className={classes.icon} />
            break;
        case ('AccountTreeIcon'):
            inputIcon = <AccountTreeIcon className={classes.icon} />
            break;
        default:
            inputIcon = <ErrorIcon className={classes.icon} />
            break;
    }

    return (
        <div className='inputForm'>
            {inputIcon}
            {inputForm}
        </div>
    )
}

export default Input;
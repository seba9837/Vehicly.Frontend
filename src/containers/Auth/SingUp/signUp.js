import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/input';
import '../auth.css';

const SignUP = props => {
    const [inputs, setInputs] = useState(
        {
            firstName: {
                elementType: 'input',
                elementAttributes: {
                    type: 'text',
                    placeholder: 'Enter your first name'
                },
                value: '',
                label: 'First name',
                iconType: 'AccountCircleIcon'
            },
            lastName: {
                elementType: 'input',
                elementAttributes: {
                    type: 'text',
                    placeholder: 'Enter your last name'
                },
                value: '',
                label: 'Last name',
                iconType: 'AccountCircleIcon'
            },
            email: {
                elementType: 'input',
                elementAttributes: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: '',
                label: 'E-mail',
                iconType: 'EmailIcon'
            },
            password: {
                elementType: 'input',
                elementAttributes: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value: '',
                label: 'Password',
                iconType: 'LockIcon'
            },
            confirmPassword: {
                elementType: 'input',
                elementAttributes: {
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                value: '',
                label: 'Confirm password',
                iconType: 'LockIcon'
            },
            accountType: {
                elementType: 'select',
                elementConfig: {
                    options: []
                },
                value: '',
                label: 'Account type',
                iconType: 'AccountTreeIcon'
            }
        }
    );

    const inputChangeHandler = (event, inputName) => {

    }

    const formElementsArray = [];
    for (let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key]
        });
    }

    let formInputs = formElementsArray.map(formInput => (
        <Input
            key={formInput.id}
            value={formInput.config.value}
            elementType={formInput.config.elementType}
            elementAttributes={formInput.config.elementAttributes}
            label={formInput.config.label}
            iconType={formInput.config.iconType}
            changed={(event) => inputChangeHandler(event, formInput.id)}
        />

    ))

    return (
        <div className='authContainer'>
            <form className='authForm'>
                <h1>Create your account</h1>
                <div className='authInputsForm'>
                    {formInputs}
                </div>
                <div className='textWithLinkContainer'>
                    <span>Already have an account? </span>
                    <Link to='/signin'>Sign in</Link>.
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        authenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUP)

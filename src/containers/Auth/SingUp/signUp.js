import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/input';

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
                label: ''
            },
            lastName: {
                elementType: 'input',
                elementAttributes: {
                    type: 'text',
                    placeholder: 'Enter your last name'
                },
                value: '',
                label: ''
            },
            email: {
                elementType: 'input',
                elementAttributes: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                value: '',
                label: ''
            },
            password: {
                elementType: 'input',
                elementAttributes: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value: '',
                label: ''
            },
            confirmPassword: {
                elementType: 'input',
                elementAttributes: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                value: '',
                label: ''
            },
            accountType: {
                elementType: 'select',
                elementConfig: {
                    options: []
                },
                value: '',
                label: ''
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
            changed={(event) => inputChangeHandler(event, formInput.id)}
        />

    ))

    return (
        <div>
            <form>
                Zarejestruj się
                {formInputs}
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

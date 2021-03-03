import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/input';

const SignIn = props => {
    const [ inputs, setInputs ] = useState(
        {
            email: {
                elementType: 'input',
                elementAttributes: {
                    type: 'email',
                    placeholder: 'Enter your email'
                }
            },
            password: {
                elementType: 'input',
                elementAttributes: {
                    type: 'password',
                    placeholder: 'Enter your password'
                }
            }
        }
    );
    
    const inputChangeHandler = (event, inputName) => {

    }

    const formElementsArray = [];
    for(let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key]
        });
    }
    
    let formInputs = formElementsArray.map(formInput => (
        <Input
            key={formInput.id}
            elementType={formInput.config.elementType}
            elementAttributes={formInput.config.elementAttributes}
            changed={(event) => inputChangeHandler(event, formInput.id)}
        />

    ))

    return (
        <div>
            <form>
                Zaloguj się
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

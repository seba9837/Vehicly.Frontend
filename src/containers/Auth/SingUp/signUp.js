import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Input from '../../../components/UI/Input/input';
import Button from '../../../components/UI/Button/button';
import '../auth.css';

const SignUp = (props) => {
  const [inputs, setInputs] = useState({
    email: {
      elementType: 'input',
      elementAttributes: {
        type: 'email',
        placeholder: 'Enter your email',
      },
      value: '',
      label: 'E-mail',
      iconType: 'EmailIcon',
      error: '',
    },
    password: {
      elementType: 'input',
      elementAttributes: {
        type: 'password',
        placeholder: 'Enter your password',
      },
      value: '',
      label: 'Password',
      iconType: 'LockIcon',
      error: '',
    },
    passwordConfirmation: {
      elementType: 'input',
      elementAttributes: {
        type: 'password',
        placeholder: 'Confirm your password',
      },
      value: '',
      label: 'Confirm password',
      iconType: 'LockIcon',
      error: '',
    },
  });

  useEffect(() => {
    let updatedInputs = {
      ...inputs,
    };
    if (props.error !== null)
      for (let inputPropertyName in inputs) {
        if (props.error.hasOwnProperty(inputPropertyName)) {
          updatedInputs = {
            ...updatedInputs,
            [inputPropertyName]: {
              ...inputs[inputPropertyName],
              error: props.error[inputPropertyName],
            },
          };
        } else {
          updatedInputs = {
            ...updatedInputs,
            [inputPropertyName]: {
              ...inputs[inputPropertyName],
              error: '',
            },
          };
        }
      }
    setInputs(updatedInputs);
  }, [props.error]);

  const inputChangeHandler = (event, inputName) => {
    const updatedInput = {
      ...inputs,
      [inputName]: {
        ...inputs[inputName],
        value: event.target.value,
      },
    };
    setInputs(updatedInput);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onTryRegister(
      inputs.email.value,
      inputs.password.value,
      inputs.passwordConfirmation.value
    );
  };
  const formElementsArray = [];
  for (let key in inputs) {
    formElementsArray.push({
      id: key,
      config: inputs[key],
    });
  }

  let formInputs = formElementsArray.map((formInput) => (
    <Input
      key={formInput.id}
      value={formInput.config.value}
      elementType={formInput.config.elementType}
      elementAttributes={formInput.config.elementAttributes}
      label={formInput.config.label}
      iconType={formInput.config.iconType}
      error={formInput.config.error}
      changed={(event) => inputChangeHandler(event, formInput.id)}
    />
  ));

  return (
    <div className='authContainer'>
      <form className='authForm'>
        <h1>Create your account</h1>
        <div className='authInputsForm'>{formInputs}</div>
        <Button clicked={(event) => submitHandler(event)}>Sign up</Button>
        <div className='textWithLinkContainer'>
          <span>Already have an account? </span>
          <Link to='/signin'>Sign in</Link>.
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    authenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryRegister: (email, password, passwordConfirmation) =>
      dispatch(actions.tryRegister(email, password, passwordConfirmation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import Input from '../../../components/UI/Input/input';
import Button from '../../../components/UI/Button/button';
import '../auth.css';

const SignUP = (props) => {
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
    },
    confirmPassword: {
      elementType: 'input',
      elementAttributes: {
        type: 'password',
        placeholder: 'Confirm your password',
      },
      value: '',
      label: 'Confirm password',
      iconType: 'LockIcon',
    },
  });

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
      inputs.confirmPassword.value
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUP);

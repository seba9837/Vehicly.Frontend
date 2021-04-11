import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authRegisterStart = () => {
  return {
    type: actionTypes.AUTH_REGISTER_START,
  };
};

export const authRegisterSuccess = (token) => {
  return {
    type: actionTypes.AUTH_REGISTER_SUCCESS,
    token: token,
  };
};

export const authRegisterFailed = (error) => {
  return {
    type: actionTypes.AUTH_REGISTER_FAILED,
    error: error,
  };
};

export const tryRegister = (email, password, passwordConfirmation) => {
  return (dispatch) => {
    dispatch(authRegisterStart());

    const registerData = {
      email,
      password,
      passwordConfirmation,
    };

    axios
      .post('/api/v1/auth/signup', registerData)
      .then((res) => {
        console.log(res);
        //dispatch(authRegisterSuccess(res));
      })
      .catch((err) => {
        console.log(err);
        //dispatch(authRegisterFailed(err));
      });
  };
};

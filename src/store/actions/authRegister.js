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
  return async (dispatch) => {
    dispatch(authRegisterStart());

    const registerData = {
      email,
      password,
      passwordConfirmation,
    };
    try {
      const {
        headers: { 'x-correlation-id': xCorrelationId },
      } = await axios.post('/api/v1/auth/signup', registerData);
      await new Promise((resolve) => setTimeout(resolve, 100));
      const {
        data: { errors, status },
      } = await axios.get(`/api/v1/actions/${xCorrelationId}`);
      console.log(errors, status);
      if (status === 'Failed') {
        const errorsArr = [];
        Object.entries(errors).map((val) => {
          errorsArr.push(...val[1]);
        });
        dispatch(authRegisterFailed(errorsArr));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

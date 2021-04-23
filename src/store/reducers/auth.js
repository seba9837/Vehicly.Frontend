import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const authRegisterStart = (state, action) => {
  return {
    ...initialState,
    error: null,
  };
};

const authRegisterSuccess = (state, action) => {
  return {
    ...initialState,
  };
};

const authRegisterFailed = (state, action) => {
  return {
    ...initialState,
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REGISTER_START:
      return authRegisterStart(state, action);
    case actionTypes.AUTH_REGISTER_SUCCESS:
      return authRegisterSuccess(state, action);
    case actionTypes.AUTH_REGISTER_FAILED:
      return authRegisterFailed(state, action);
    default:
      return state;
  }
};

export default reducer;

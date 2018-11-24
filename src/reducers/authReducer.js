import { TYPES } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.SIGNUP_CURRENT_USER:
      return {
        ...state,
      };
    case TYPES.CREATE_SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TYPES.LOGIN_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case TYPES.LOGOUT_CURRENT_USER:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
      };
    case TYPES.CREATE_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

import { TYPES } from '../actions/types';

const initialState = {
  projects: [],
  loading: false,
  project: {},
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPES.PROJECT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        //projects: state.projects,
        loading: false,
      };
    case TYPES.CREATE_PROJECT:
      return {
        ...state,
        project: action.payload,
        loading: false,
      };
    case TYPES.CREATE_PROJECT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

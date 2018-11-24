import { TYPES } from '../actions/types';

const initialState = {
  projects: [],
  loading: false,
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
    default:
      return state;
  }
}

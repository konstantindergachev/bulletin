import { TYPES } from './types';

//Get all projects
export const getProjects = () => async dispatch => {
  try {
    dispatch(setProjectLoading());
    const projects = await fetch(`${databaseURL}/projects.json`).then(res =>
      res.json(),
    );
    dispatch({
      type: TYPES.GET_PROJECTS,
      payload: projects,
    });
  } catch (err) {
    dispatch({
      type: TYPES.GET_PROJECTS,
      payload: null,
    });
  }
};

//Project loading
export const setProjectLoading = () => {
  return {
    type: TYPES.PROJECT_LOADING,
  };
};
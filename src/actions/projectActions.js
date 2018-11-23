import { TYPES } from './types';

//Create a project
export const createProject = (
  projectData,
  uid,
  profile,
  firestore,
  history,
) => async dispatch => {
  try {
    dispatch(setProjectLoading());
    const { firstName, lastName } = profile;
    const project = await firestore.add(
      { collection: 'projects' },
      {
        ...projectData,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId: uid,
        createdAt: new Date(),
      },
    );
    dispatch({
      type: TYPES.CREATE_PROJECT,
      payload: project,
    });
    history.push('/');
  } catch (err) {
    dispatch({
      type: TYPES.CREATE_PROJECT_ERROR,
      payload: err,
    });
  }
};

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
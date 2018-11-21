import { TYPES } from './types';

//Create a signUp action creator
export const signUp = (newUserData, firebase, firestore) => async dispatch => {
  try {
    const { email, password } = newUserData;
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await firestore
      .collection('users')
      .doc(response.user.uid)
      .set({
        firstName: newUserData.firstname,
        lastName: newUserData.lastname,
        initials: newUserData.firstname[0] + newUserData.lastname[0],
      });
    dispatch({
      type: TYPES.SIGNUP_CURRENT_USER,
    });
  } catch (err) {
    dispatch({
      type: TYPES.CREATE_SIGNUP_ERROR,
      payload: err.message,
    });
  }
};

//Create a signIn action creator
export const signIn = (credentials, firebase) => async dispatch => {
  const { email, password } = credentials;
  try {
    const serverAnswer = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch({
      type: TYPES.LOGIN_CURRENT_USER,
      payload: serverAnswer,
    });
  } catch (err) {
    dispatch({
      type: TYPES.CREATE_LOGIN_ERROR,
      payload: err.message,
    });
  }
};

//Creater a signOut action creator
export const signOut = firebase => async dispatch => {
  try {
    firebase.auth().signOut();
    dispatch({
      type: TYPES.LOGOUT_CURRENT_USER,
    });
  } catch (err) {
    dispatch({
      type: TYPES.CREATE_LOGOUT_ERROR,
      payload: err.message,
    });
  }
};
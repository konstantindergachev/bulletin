import { TYPES } from './types';

//Create a signUp action creator
export const signUp = (
  newUserData,
  firebase,
  firestore,
) => async dispatch => {
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

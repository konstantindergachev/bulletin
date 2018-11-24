import { combineReducers } from 'redux';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import projectReducer from './projectReducer';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  project: projectReducer,
});

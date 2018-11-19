import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import config from './config';

//react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(config);
//Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase), // needed if using firestore
)(createStore);

const initialState = {};
const middleware = [thunk];

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;

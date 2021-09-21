import peopleReducer from './people-reducer';
import dreamReducer from './dream-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  mainDreamList: dreamReducer,
  mainPeopleList: peopleReducer,
  firestore: firestoreReducer
});

export default rootReducer;
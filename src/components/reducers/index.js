import peopleReducer from './people-reducer';
import dreamReducer from './dream-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  mainDreamList: dreamReducer,
  mainPeopleList: peopleReducer
});

export default rootReducer;
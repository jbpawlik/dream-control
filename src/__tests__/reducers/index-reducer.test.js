import peopleReducer from '../../reducers/people-reducer';
import dreamReducer from  '../../reducers/dream-reducer';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index'

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainDreamList: {},
      mainPeopleList: {}
    });
  });
});

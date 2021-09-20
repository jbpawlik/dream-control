import peopleReducer from "../../reducers/people-reducer"

describe('peopleReducer', () => {

  let action;

  // const currentState = {
  //   1: { name: "Tom",
  //       location: "Portland",
  //       id: 1
  //     }
  //     2: { name: "Tom",
  //     location: "Portland",
  //     id: 
  //     }
  //   }

  test('should return default state if no action is recognized or input', () => {
    expect(peopleReducer({}, { type: null})).toEqual({});
  });

  // test('Should successfully add new people to master list', () => {

  // })

})
import dreamReducer from "../../reducers/dream-reducer"

describe('dreamReducer', () => {

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
    expect(dreamReducer({}, { type: null})).toEqual({});
  });

  // test('Should successfully add new people to master list', () => {

  // })

})
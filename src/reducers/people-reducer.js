export default (state = {}, action) => {
  const { name, location, id } = action;
  switch (action.type) {
    case "ADD_PERSON":
    return Object.assign({}, state, {
      [id]: {
        name: name,
        location: location,
        id: id
      }
    })
    default:
      return state
  }
};
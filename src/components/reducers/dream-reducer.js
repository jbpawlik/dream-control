export default (state = {}, action) => {
  const { name, location, id, pId } = action;
  switch (action.type) {
    case "ADD_DREAM":
    return Object.assign({}, state, {
      [id]: {
        name: name,
        location: location,
        id: id,
        pId: pId
      }
    })
    default:
      return state
  }
}
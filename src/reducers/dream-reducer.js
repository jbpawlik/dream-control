export default (state = {}, action) => {
  const { dream, mood, id, pId } = action;
  switch (action.type) {
    case "ADD_DREAM":
    return Object.assign({}, state, {
      [id]: {
        dream: dream,
        mood: mood,
        id: id,
        pId: pId
      }
    })
    default:
      return state
  }
}
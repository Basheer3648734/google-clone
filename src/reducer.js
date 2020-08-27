export const initialState = {
  term: null,
};
export const action_types = {
  SEARCH_TERM: "search_term",
};
const reducer = (state = initialState, action) => {
  console.log("action dispatched", action);
  switch (action.type) {
    case action_types.SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};
export default reducer;

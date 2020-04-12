const initialState = {
  user: null,
  enums: {},
};

function rootReducer(state = initialState, action) {
  return Object.assign({}, state, action.payload);
};

export default rootReducer;

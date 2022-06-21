import shopActionType from "./shopActionTypes";

const INITIAL_STATE = null;

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionType.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;

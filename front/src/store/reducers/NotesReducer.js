/*
 * Import Actions
 * ******************** */
import * as Actions from "../actions/ActionTypes.js";

/*
 * Selector
 * ******** */
const initialState = {
  data: {}
};

/*
 * Reducers
 * ******** */

export function NotesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_NOTES_DATA:
      return { ...state, data: action.payload };
    case Actions.POST_NOTES:
      return { ...state };
    case Actions.PUT_NOTES:
      return { ...state };
    case Actions.DEL_NOTES:
      return { ...state };
  }
}

/*
 * Getters
 * ******* */
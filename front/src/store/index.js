import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {NotesReducer} from "./reducers/NotesReducer.js";

const rootReducer = combineReducers({
    notes: NotesReducer
});
 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); //Dev
// export const store = createStore(rootReducer); //prod
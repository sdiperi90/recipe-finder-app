import { combineReducers } from "redux";
import { recipes } from "./recipesReducers";

export const rootReducer = combineReducers({
  recipes
});

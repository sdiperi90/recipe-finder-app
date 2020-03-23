import { combineReducers } from "redux";
import { recipes, favorites } from "./recipesReducers";

export const rootReducer = combineReducers({
  recipes,
  favorites
});

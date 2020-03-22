import { SET_RECIPES } from "./constants";

export const setRecipes = items => dispatch => {
  dispatch({
    type: SET_RECIPES,
    payload: items
  });
};

import { SET_RECIPES, FAVORITE_RECIPE } from "./constants";

export const setRecipes = items => dispatch => {
  dispatch({
    type: SET_RECIPES,
    payload: items
  });
};

export const favoriteRecipe = recipe => {
  return {
    type: FAVORITE_RECIPE,
    payload: recipe
  };
};

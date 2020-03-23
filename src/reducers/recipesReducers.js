import { SET_RECIPES, FAVORITE_RECIPE } from "../actions/constants";

export const recipes = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

export const favorites = (state = [], action) => {
  switch (action.type) {
    case FAVORITE_RECIPE:
      return [...state, action.payload];
    default:
      return state;
  }
};

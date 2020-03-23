import React, { Component } from "react";
import * as actions from "../actions/recipes";
import { connect } from "react-redux";

class RecipeItem extends Component {
  render() {
    let { recipe, favoriteRecipe } = this.props;
    console.log(
      "favoriteRecipe",
      favoriteRecipe,
      recipe.title,
      recipe.href,
      recipe.thumbnail
    );
    return (
      <div className="recipe-item">
        <div className="star" onClick={e => this.props.favoriteRecipe(recipe)}>
          &#9734;
        </div>
        <div className="recipe-text">
          <a>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img className="recipe-img" src={recipe.thumbnail} alt={recipe.title} />
      </div>
    );
  }
}

export default connect(null, actions)(RecipeItem);

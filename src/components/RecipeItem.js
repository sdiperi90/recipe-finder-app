import React, { Component } from "react";
import * as actions from "../actions/recipes";
import { connect } from "react-redux";

class RecipeItem extends Component {
  constructor(props) {
    super();
    this.state = {
      favorited: false
    };
  }

  handleFavorite = recipe => {
    this.props.favoriteRecipe(recipe);
    this.setState({ favorited: true });
  };

  render() {
    let { recipe, favorite } = this.props;
    return (
      <div className="recipe-item">
        {!favorite && (
          <div
            className={`star ${this.state.favorited && `favorited`}`}
            onClick={e => this.handleFavorite(recipe)}
          >
            &#9734;
          </div>
        )}
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

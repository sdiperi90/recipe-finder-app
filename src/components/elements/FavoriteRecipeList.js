import React, { Component } from "react";
import RecipeItem from "../RecipeItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FavoriteRecipeList extends Component {
  render() {
    let { favoriteRecipes } = this.props;
    console.log("fav", favoriteRecipes);
    return (
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        {favoriteRecipes &&
          favoriteRecipes.map((recipe, index) => {
            return <RecipeItem favorite={true} recipe={recipe} key={index} />;
          })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    favoriteRecipes: state.favorites
  };
};

export default connect(mapStateToProps, null)(FavoriteRecipeList);

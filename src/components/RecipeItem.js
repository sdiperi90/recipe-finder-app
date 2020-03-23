import React, { Component } from "react";

class RecipeItem extends Component {
  render() {
    return <h4>{this.props.recipe.title}</h4>;
  }
}

export default RecipeItem;

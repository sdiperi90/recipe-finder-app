import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";

class RecipeList extends Component {
  render() {
    let { recipes } = this.props;
    return (
      <div>
        <h1>Recipe List</h1>
        {recipes &&
          recipes.map((recipe, index) => {
            return <RecipeItem recipe={recipe} key={index} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(RecipeList);

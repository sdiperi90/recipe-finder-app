import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeList extends Component {
  render() {
    return (
      <div>
        <h1>Recipe List</h1>
      </div>
    );
  }
}

export default connect()(RecipeList);

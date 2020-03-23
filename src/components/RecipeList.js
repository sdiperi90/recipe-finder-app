import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";

class RecipeList extends Component {
  constructor(props) {
    super();
    this.state = {
      favorite: false
    };
  }

  handleRecipes = () => {
    this.setState({
      favorite: !this.state.favorite
    });
  };

  render() {
    let { recipes } = this.props;
    return (
      <div>
        <div>
          <h1>
            <Link to="/favorites">Favorites</Link>
          </h1>
          {recipes &&
            recipes.map((recipe, index) => {
              return <RecipeItem recipe={recipe} key={index} />;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(RecipeList);

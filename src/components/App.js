import React, { Component } from "react";
import SearchRecipes from "./SearchRecipes";
import { FlexContainer } from "./elements/Flex";
import RecipeList from "./RecipeList";
import "./../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "100vh" }}>
        <FlexContainer
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <h1>Recipe Finder</h1>
          <SearchRecipes />
          <RecipeList />
        </FlexContainer>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";
import { FlexContainer } from "./elements/Flex";
import * as actions from "../actions";

class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: "",
      dish: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  search = async () => {
    let { ingredients, dish } = this.state;
    const url = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    let response = await fetch(url, { method: "GET" });
    let recipes = await response.json();
    console.log("recipes", recipes);
    this.props.setRecipes(recipes);
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    console.log("props", this.props);
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{" "}
          <FormControl
            name="ingredients"
            onChange={e => this.handleChange(e)}
            type="text"
            placeholder="garlic, chicken"
          />
        </FormGroup>{" "}
        <FormGroup>
          <FormLabel type="text" placeholder="adobo">
            Dish
          </FormLabel>{" "}
          <FormControl onChange={e => this.handleChange(e)} name="dish" />
          {""}
        </FormGroup>
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, actions)(SearchRecipes);

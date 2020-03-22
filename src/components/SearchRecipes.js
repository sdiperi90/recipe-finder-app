import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from "react-bootstrap";
import { FlexContainer } from "./elements/Flex";

class SearchRecipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: "",
      dish: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  search = () => {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log("state", this.state, "url", url);
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    console.log(this.state);
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

export default SearchRecipes;

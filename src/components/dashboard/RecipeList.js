import React from "react";
import { useSelector } from "react-redux";
import { Jumbotron, Button, Row, Col } from 'reactstrap';

import { Link } from "react-router-dom";
import LunchTable from '../layout/LunchTable.png'

import Recipe from "./Recipe";

const RecipeList = () => {
  const recipes = useSelector(state => state.recipes.all);
  let listOfRecipes;
  
  listOfRecipes = recipes.map(recipe => {
    console.log("recipe: ", recipe)
    return (<Recipe key={recipe.id} recipe={recipe} />)
    
  });
  
  if (recipes && recipes.length) {
    return (
      <Jumbotron>
        <h1 className="display-3">Hack My Dish</h1>
        <p className="lead">Submit A Hack</p>
        <hr className="my-2" />
        <Row>
          <Link to="/">
            <Button><h4>Back to Main</h4></Button>
          </Link>
        </Row>
        <Row>
          <h1> </h1>
        </Row>
        <Row>
          {listOfRecipes}
        </Row>
      </Jumbotron> 
    )
  } else {
    return <div>
    <h4>Loading... </h4>
    </div>
  }
  
};
export default RecipeList;
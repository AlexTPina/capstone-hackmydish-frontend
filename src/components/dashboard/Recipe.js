import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody, CardHeader } from 'reactstrap';

import { removeRecipe } from "../../store/recipes/actions";
import { useDispatch } from "react-redux";
//import { updateRecipe } from "../../store/recipes/actions";
import { Link } from "react-router-dom";
import { setTimeout } from "timers";
import LunchTable from '../layout/LunchTable.png'

const Recipe = ({ recipe }) => {
    const [recipeName] = useState(recipe.recipe_name);
    const [ingredients] = useState(recipe.ingredients);
    const [preparation] = useState(recipe.preparation);
    const [cookingInstructions] = useState(recipe.cooking_instructions);
    const [hackNeeded] = useState(recipe.hack_needed)
    const [hack] = useState(recipe.hack);

    const dispatch = useDispatch();


    const editRecipe = e => {};

    const deleteButtonClick = e => {
      dispatch(removeRecipe(e.target.id));
      setTimeout(window.location.reload(), 1000);
    };

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
      <Col sm="8">
        <Card>
          <CardHeader tag="h3">Recipe Name</CardHeader>
          <CardBody>
            <CardTitle>Requested Hack</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardTitle>Ingredients</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardTitle>Preperation Instructions</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardTitle>Cooking Instructions</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Link to="/editrecipe">
              <Button>Hack This Dish</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <img width="100%" src={LunchTable} alt="Card image cap" />  
      </Col>
    </Row>
    {/* <Row>
      <Col sm="4">
        <img width="100%" src={LunchTable} alt="Card image cap" />  
      </Col>
      <Col sm="8">
        <Card>
          <CardHeader tag="h3">Recipe Name</CardHeader>
          <CardBody>
            <CardTitle>Requested Hack</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardTitle>Ingredients</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardTitle>Preperation Instructions</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <CardTitle>Cooking Instructions</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Link to="/editrecipe">
              <Button>Hack This Dish</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row> */}
  </Jumbotron>
  )
}

export default Recipe
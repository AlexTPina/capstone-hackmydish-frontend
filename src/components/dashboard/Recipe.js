import React, { useState } from 'react'
import { Col, Button, Card, CardTitle, CardText, CardBody, CardHeader, Row } from 'reactstrap';
import LunchTable from '../layout/LunchTable.png'
//import { removeRecipe } from "../../store/recipes/actions";
import { useDispatch } from "react-redux";
//import { updateRecipe } from "../../store/recipes/actions";
import { Link } from "react-router-dom";
import { fetchOneRecipe } from '../../store/recipes/actions';

//import { setTimeout } from "timers";

const Recipe = ({ recipe }) => {
    // const [recipeName, setRecipeName] = useState(recipe.recipeName);
    // const [ingredients, setIngredients] = useState(recipe.ingredients);
    // const [preparation, setPreparation] = useState(recipe.preparation);
    // const [cookingInstructions, setCookingInstructions] = useState(recipe.cookingInstructions);
    // const [hackNeeded, setHackNeeded] = useState(recipe.hackNeeded)
    // const [hack, setHack] = useState(recipe.hack);
    const{ recipeName, ingredients, preparation, cookingInstructions, hackNeeded, hack, id} = recipe

    const dispatch = useDispatch();
    console.log("hi")

    const handleClick = recipeId => {
        dispatch(fetchOneRecipe(recipeId))
    }

return (
        < >
        <Row>
            <Col sm="8">
                <Card>
                <CardHeader tag="h3">{recipeName}</CardHeader>
                <CardBody>
                    <CardTitle>Requested Hack</CardTitle>
                        <CardText>{hackNeeded}</CardText>
                    <CardTitle>Ingredients</CardTitle>
                        <CardText>{ingredients}</CardText>
                    <CardTitle>Preperation Instructions</CardTitle>
                        <CardText>{preparation}</CardText>
                    <CardTitle>Cooking Instructions</CardTitle>
                        <CardText>{cookingInstructions}</CardText>
                    <Link to="/hackrecipe">
                        <Button>Hack This Dish</Button>
                    </Link>
                    <Link to={`/editrecipe/${id}`}>
                        <Button onClick={ () => handleClick(id)}>Edit This Dish</Button>
                    </Link>    
                </CardBody>
                </Card>
            </Col>
            {/* <Col sm="4">
                <img width="100%" src={LunchTable} alt=" " />
            </Col> */}
        </Row>
</ >
  )
}

export default Recipe



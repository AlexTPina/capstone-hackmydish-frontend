import React from 'react'
import { Col, Button, Card, CardTitle, CardText, CardBody, CardHeader, Row } from 'reactstrap';

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { fetchOneRecipe } from '../../store/recipes/actions';



const Recipe = ({ recipe }) => {
    const{ recipeName, ingredients, preparation, cookingInstructions, hackNeeded, hack, id} = recipe

    const dispatch = useDispatch();

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
                    <CardTitle>Hack</CardTitle>
                        <CardText>{hack}</CardText>    
                    <Link to={`/recipehack/${id}`}>
                        <Button onClick={ ()=> handleClick(id)}>Hack This Dish</Button>
                    </Link>
                    <Link to={`/recipeedit/${id}`}>
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



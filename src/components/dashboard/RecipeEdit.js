import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody, CardHeader} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useParams } from "react-router-dom";
import { removeRecipe } from "../../store/recipes/actions";
import { updateRecipe } from "../../store/recipes/actions";
import { setTimeout } from "timers";
import Recipe from "./Recipe";
import Hands from '../layout/Hands.png'

const RecipeEdit = () => {
    const params = useParams()
    const recipes = useSelector(state => state.recipes.all)
    const recipe = recipes.filter(recipe => recipe.id === Number(params.id))
   
    const { recipeName, hackNeeded, ingredients, preparation, cookingInstructions, hack } = recipe[0]
    const [state, setState] = useState({
        recipeName: recipeName,
        hackNeeded: hackNeeded,
        ingredients: ingredients,
        preparation: preparation,
        cookingInstructions: cookingInstructions,
        hack: hack
    })
    
    
    const removeRecipeButton = (e) => {
        dispatchEvent(removeRecipe(e.target.id));
        setTimeout(window.location.reload(), 1000)
    };    


return (
  <div>
  <Jumbotron>
    <h1 className="display-3">Hack My Dish</h1>
    <p className="lead">Edit This Dish</p>
    <hr className="my-2" />
      
    <Row>
      <Col sm="4">
        <img width="100%" src={Hands} alt=" " />  
      </Col>
      <Col sm="8">
        <Form>
            <FormGroup>
                <Label for="recipeName">Recipe Name</Label>
                            <Input type="textArea" name="recipeName" id="recipeName" defaultValue={state.recipeName}/>
            </FormGroup>
            <FormGroup>
                <Label for="hackNeeded">Requested Hack</Label>
                    <Input type="textArea" name="hackNeeded" id="hackNeeded" defaultValue={state.hackNeeded}/>
            </FormGroup>                 
            <FormGroup>
                <Label for="ingredients">Ingredients</Label>
                    <Input type="textArea" name="ingredients" id="ingredients" defaultValue={state.ingredients}/>
            </FormGroup>                 
            <FormGroup>
                <Label for="preparationInstructions">Preparation Instructions</Label>
                    <Input type="textArea" name="preparationInstructions" id="preparationInstructions" defaultValue={state.preparation}/>
            </FormGroup>  
            <FormGroup>
                <Label for="cookingInstructions">Cooking Instructions</Label>
                    <Input type="textArea" name="cookingInstructions" id="cookingInstructions" defaultValue={state.cookingInstructions}/>
            </FormGroup>  
            <FormGroup>
               <Label for="hack">Hack</Label>
                    <Input type="textArea" name="hack" id="hack" defaultValue={state.hack}/>
            </FormGroup>
            <Link to="/recipelist"> 
              <Button><h4>Submit Edit</h4></Button>
            </Link>
            <Link to="/recipelist">
                <Button><h4>Cancel</h4></Button>
            </Link>
            <Link to="/recipelist">
                <Button id={recipe.id} onClick={removeRecipeButton}><h4>Delete Recipe</h4></Button>
            </Link>            
        </Form>
      </Col>
    </Row>
  </Jumbotron>
</div>
  )
}

export default RecipeEdit

//console.log("recipe: ", recipe)
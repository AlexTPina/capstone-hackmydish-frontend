import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useParams } from "react-router-dom";
import { removeRecipe } from "../../store/recipes/actions";
import { updateRecipe } from "../../store/recipes/actions";

import Hands from '../layout/Hands.png'

const RecipeEdit = (props) => {
    const params = useParams()
    const recipes = useSelector(state => state.recipes.all)
    const recipe = recipes.filter(recipe => recipe.id === Number(params.id))
    const dispatch = useDispatch();

    const { id, recipeName, hackNeeded, ingredients, preparation, cookingInstructions, hack } = recipe[0]
  const [state, setState] = useState({
        id: id,
        recipeName: recipeName,
        hackNeeded: hackNeeded,
        ingredients: ingredients,
        preparation: preparation,
        cookingInstructions: cookingInstructions,
        hack: hack
    })
    
    
  const removeRecipeButton = e => {
        console.log("remove id: ", props.match.params.id)
        dispatch(removeRecipe(props.match.params.id));
        //setTimeout(window.location.reload(), 1000)
    };    

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateRecipe(state, props.history.push, state.id ))
  }
  const handleChange = name => e => {
    setState({
      ...state,
      [name]: e.target.value
    })
  }

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
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="recipeName">Recipe Name</Label>
              <Input type="textArea" name="recipeName" id="recipeName" defaultValue={state.recipeName}
              onChange={handleChange("recipeName")}/>
            </FormGroup>
            <FormGroup>
                <Label for="hackNeeded">Requested Hack</Label>
              <Input type="textArea" name="hackNeeded" id="hackNeeded" defaultValue={state.hackNeeded}
              onChange={handleChange("hackNeeded")}/>
            </FormGroup>                 
            <FormGroup>
                <Label for="ingredients">Ingredients</Label>
              <Input type="textArea" name="ingredients" id="ingredients" defaultValue={state.ingredients}
              onChange={handleChange("ingredients")}/>
            </FormGroup>                 
            <FormGroup>
                <Label for="preparationInstructions">Preparation Instructions</Label>
              <Input type="textArea" name="preparationInstructions" id="preparationInstructions" defaultValue={state.preparation}
                onChange={handleChange("preparation")}/>
            </FormGroup>  
            <FormGroup>
                <Label for="cookingInstructions">Cooking Instructions</Label>
              <Input type="textArea" name="cookingInstructions" id="cookingInstructions" defaultValue={state.cookingInstructions}
                onChange={handleChange("cookingInstructions")} />
            </FormGroup>  
            <FormGroup>
               <Label for="hack">Hack</Label>
              <Input type="textArea" name="hack" id="hack" defaultValue={state.hack}
              onChange={handleChange("hack")}/>
            </FormGroup>
            
              <Button type="submit"><h4>Submit Edit</h4></Button>
          
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
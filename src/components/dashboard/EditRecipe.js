import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody, CardHeader} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
import Hands from '../layout/Hands.png'

const EditRecipe = () => {
    const recipe = useSelector(state => state.recipes.one) || { }
    console.log("recipe: ", recipe)
    const { cookingInstructions } =recipe
    const [state, setState] = useState({
        
        cookingInstructions: recipe.hasOwnProperty("id") ? cookingInstructions : " ",
        
      })
      console.log('state: ', state)
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
                            <Input type="textArea" name="recipeName" id="recipeName" defaultValue={recipe.recipeName}/>
            </FormGroup>
            <FormGroup>
                <Label for="hackNeeded">Requested Hack</Label>
                    <Input type="textArea" name="hackNeeded" id="hackNeeded" defaultValue={recipe.hackNeeded}/>
            </FormGroup>                 
            <FormGroup>
                <Label for="ingredients">Ingredients</Label>
                    <Input type="textArea" name="ingredients" id="ingredients" defaultValue={recipe.ingredients}/>
            </FormGroup>                 
            <FormGroup>
                <Label for="preparationInstructions">Preparation Instructions</Label>
                    <Input type="textArea" name="preparationInstructions" id="preparationInstructions" defaultValue={recipe.preparation}/>
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
                <Button><h4>Delete Recipe</h4></Button>
            </Link>            
        </Form>
      </Col>
    </Row>
  </Jumbotron>
</div>
  )
}

export default EditRecipe
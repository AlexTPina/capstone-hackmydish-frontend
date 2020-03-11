import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addRecipe } from '../../store/recipes/actions';
import Food from '../layout/Food.png';

const RecipeAdd = (props) => {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    recipeName: "",
    ingredients: "",
    preparation: "",
    cookingInstructions: "",
    hackNeeded: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formatedRecipe = {
      ...state, 
      hack:""
    }
   
    dispatch(addRecipe(formatedRecipe, props.history.push))
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
      <p className="lead">Submit Your Dish</p>
      <hr className="my-2" />
        
      <Row>
        <Col sm="4">
          <img width="100%" src={Food} alt=" " />  
        </Col>
        <Col sm="8">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="recipeName">Recipe Name</Label>
              <Input type="title" name="recipeName" id="recipeName"
                value={state.recipeName} onChange={handleChange("recipeName")}/>
            </FormGroup>
            <FormGroup>
              <Label for="ingredients">Ingredients</Label>
              <Input type="textarea" name="ingredients" id="ingredients"
                value={state.ingredients} onChange={handleChange("ingredients")}/>
            </FormGroup>
            <FormGroup>
              <Label for="preparation">Preparation Instructions</Label>
              <Input type="textarea" name="preparation" id="preparation"
                value={state.preparation} onChange={handleChange("preparation")}/>
            </FormGroup>
            <FormGroup>
              <Label for="cookingInstructions">Cooking Instructions</Label>
              <Input type="textarea" name="cookingInstructions" id="cookingInstructions"
                value={state.cookingInstructions} onChange={handleChange("cookingInstructions")}/>
            </FormGroup>
            <FormGroup>
              <Label for="hackNeeded">Hack Needed</Label>
              <Input type="textarea" name="hackNeeded" id="hackNeeded"
                value={state.hackNeeded} onChange={handleChange("hackNeeded")}/>
            </FormGroup>
            
            <Button type="submit"><h4>Submit</h4></Button>
            
            <Link to="/">
              <Button type="button"><h4>Cancel</h4></Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Jumbotron>
  </div>
  );
};
export default RecipeAdd
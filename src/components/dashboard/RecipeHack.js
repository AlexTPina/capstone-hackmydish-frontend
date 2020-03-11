import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody, CardHeader} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateRecipe } from '../../store/recipes/actions';
import Hands from '../layout/Hands.png'

const RecipeHack = (props) => {
  const dispatch = useDispatch()
  const params = useParams()
  const recipes = useSelector(state => state.recipes.all)
  const recipe = recipes.filter(recipe => recipe.id === Number(params.id))
  
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
    <p className="lead">Hack This Dish</p>
    <hr className="my-2" />
      
    <Row>
      <Col sm="4">
        <img width="100%" src={Hands} alt=" " />  
      </Col>
      <Col sm="8">
        <Card>
            <CardHeader tag="h3">{state.recipeName}</CardHeader>
          <CardBody>
            <CardTitle>Requested Hack</CardTitle>
              <CardText>{state.hackNeeded}</CardText>
            <CardTitle>Ingredients</CardTitle>
              <CardText>{state.ingredients}</CardText>
            <CardTitle>Preperation Instructions</CardTitle>
              <CardText>{state.preparation}</CardText>
            <CardTitle>Cooking Instructions</CardTitle>
              <CardText>{state.cookingInstructions}</CardText>
          </CardBody>
        </Card>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="hack">Hack</Label>
              <Input type="textarea" name="hack" id="hack"
              value={state.hack} onChange={handleChange("hack")}/>
          </FormGroup>
            <Button type="submit"><h4>Submit</h4></Button>
          <Link to="/recipelist">
            <Button><h4>Cancel</h4></Button>
          </Link>
        </Form>
      </Col>
    </Row>
  </Jumbotron>
</div>
  )
}

export default RecipeHack
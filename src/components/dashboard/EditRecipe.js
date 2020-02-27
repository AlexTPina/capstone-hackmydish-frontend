import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hands from '../layout/Hands.png'

const EditRecipe = () => {
  
return (
  <div>
  <Jumbotron>
    <h1 className="display-3">Hack My Dish</h1>
    <p className="lead">Hack This Dish</p>
    <hr className="my-2" />
      
    <Row>
      <Col sm="4">
        <img width="100%" src={Hands} alt="Card image cap" />  
      </Col>
      <Col sm="8">
        <Form>
          <FormGroup>
            <Label for="recipeName">Recipe Name</Label>
            <Input type="title" name="name" id="recipeName"/>
          </FormGroup>
          <FormGroup>
            <Label for="ingredients">Ingredients</Label>
            <Input type="textarea" name="ingredients" id="ingredients" />
          </FormGroup>
          <FormGroup>
            <Label for="preperation">Preperation Instructions</Label>
            <Input type="textarea" name="preperation" id="preperation" />
          </FormGroup>
          <FormGroup>
            <Label for="cookingInstructions">Cooking Instructions</Label>
            <Input type="textarea" name="cookingInstructions" id="cookingInstructions" />
          </FormGroup>
          <FormGroup>
            <Label for="hackNeeded">Hack Needed</Label>
            <Input type="textarea" name="hackNeeded" id="hackNeeded" />
          </FormGroup>
          <FormGroup>
            <Label for="hack">Hack</Label>
          <Input type="textarea" name="hack" id="hack" />
          </FormGroup>
          <Link to="/recipes"> 
              <Button><h4>Submit</h4></Button>
          </Link>
          <Link to="/">
            <Button><h4>Cancel</h4></Button>
          </Link>
        </Form>
      </Col>
    </Row>
  </Jumbotron>
</div>
  )
}

export default EditRecipe
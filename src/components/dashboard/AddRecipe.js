import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopNav from '../layout/TopNav'
import Hands from '../layout/Hands.png'

const AddRecipe = () => {
    
return (
  <div>
    <Jumbotron>
      <h1 className="display-3">Hack My Dish</h1>
      <p className="lead">Submit Your Dish</p>
      <hr className="my-2" />
        
      <Row>
        <Col sm="4">
          <img width="100%" src={Hands} alt="Card image cap" />  
        </Col>
        <Col sm="8">
          <Form>
            <FormGroup>
              <Label for="recipeTitle">Recipe Title</Label>
              <Input type="title" name="title" id="recipeTitle"/>
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
              <Label for="preperation">Cooking Instructions</Label>
              <Input type="textarea" name="preperation" id="preperation" />
            </FormGroup>
            <FormGroup>
              <Label for="preperation">Hack Needed</Label>
              <Input type="textarea" name="preperation" id="preperation" />
            </FormGroup>
            <Button><h4>Submit</h4></Button>
          </Form>
        </Col>
      </Row>
    </Jumbotron>
  </div>
  );
};
export default AddRecipe
import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody, CardHeader} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";

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
          </CardBody>
        </Card>
        <Form>
          <FormGroup>
            <Label for="hack">Hack</Label>
          <Input type="textarea" name="hack" id="hack" />
          </FormGroup>
          <Link to="/recipelist"> 
              <Button><h4>Submit</h4></Button>
          </Link>
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

export default EditRecipe
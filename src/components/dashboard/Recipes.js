import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody, CardHeader } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopNav from '../layout/TopNav'
import LunchTable from '../layout/LunchTable.png'

const Recipes = () => {
    
return (
  <Jumbotron>
      <h1 className="display-3">Hack My Dish</h1>
      <p className="lead">Submit A Hack</p>
      <hr className="my-2" />
    <Row>
      <Link to="/">
      <Button><h4>Back to Main</h4></Button>
      </Link>
    </Row> 
    <Row>
      <h1> </h1>
    </Row>
    <Row>
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
            <Button>Hack This Dish</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm="4">
        <img width="100%" src={LunchTable} alt="Card image cap" />  
      </Col>
    </Row>
    <Row>
      <Col sm="4">
        <img width="100%" src={LunchTable} alt="Card image cap" />  
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
            <Link to="/editrecipe">
              <Button>Hack This Dish</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Jumbotron>
  )
}

export default Recipes
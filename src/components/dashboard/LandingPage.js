import React from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardText } from 'reactstrap';
import { Link } from "react-router-dom";

import Ingredients from '../layout/Ingredients.png'
import TwoCooks from '../layout/TwoCooks.png'

const LandingPage = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hack My Dish</h1>
        <p className="lead">Hello Food Lovers and Welcome to Hack My Dish!</p>
        <hr className="my-2" />
        <p>Hack my dish is a community based resource created to help solve everyday food challenges.</p>
        <p>Not sure how to make your favorite dish "Keto Friendly", "Sugar Free" or how to substitute for an allergy, then you came to the right place. HMD was designed specifically to assist the everyday cook to adjust their recipes for whatever challenges they are presented with.  </p>
        <Row>
      <Col sm="6">
        <Card body>
            <img width="100%" src={Ingredients} alt=" " />     
          <CardText className="text-muted">To submit a recipe to be hacked by the community simply click the "Submit Recipe" link below. From there simply fill out the form with your recipe detail and the help you are requesting.</CardText>
            <Card body className="text-center">
            <Link to="/addRecipe">    
                <Button><h3>Submit A Dish!</h3></Button>
            </Link>
          </Card>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
            <img width="100%" src={TwoCooks} alt=" " />     
          <CardText className="text-muted">If you are a natural born problem solver feel free to help your neighbors. You can help them by reviewing their requests in the link below and submiting your favorite hacks.</CardText>
          <Card body className="text-center">
            <Link to="/recipelist">
              <Button ><h3>Hack A Dish!</h3></Button>
            </Link>
          </Card>
        </Card>
      </Col>
    </Row>
      </Jumbotron>
    </div>
  );
};

export default LandingPage

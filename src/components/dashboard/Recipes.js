import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopNav from '../layout/TopNav'

const Recipes = () => {
    
return (
  <Router> 
    <div>
      <TopNav />
      <Link to="/">    
        <Button color="warning"><h4>Back to Main</h4></Button>
      </Link>
      <h3>Recipes List</h3>
    </div>
  </Router>
  )
}

export default Recipes
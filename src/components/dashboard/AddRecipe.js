import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Jumbotron, Button, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopNav from '../layout/TopNav'

const AddRecipe = () => {
    
return (
  <Router> 
    <div>
      <TopNav />
      <Link to="/">    
        <Button><h3>Back to Main</h3></Button>
      </Link>
      <h3>Add Recipe</h3>
    </div>
  </Router>
  )
}

export default AddRecipe
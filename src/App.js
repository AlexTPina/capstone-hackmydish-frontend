import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import LandingPage from './components/dashboard/LandingPage'
import AddRecipe from './components/dashboard/AddRecipe'
import EditRecipe from './components/dashboard/EditRecipe'
import Recipes from './components/dashboard/Recipes'

import { connect } from 'react-redux'
//import { fetchAllCars } from './store/cars/actions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    //this.props.dispatch(fetchAllCars())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Row>
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/addrecipe" component={AddRecipe} />
                  <Route path="/editrecipe" component={EditRecipe} />
                  <Route path="/recipes" component={Recipes} />
                </Switch>
            </Row>
          </Container>
        </div>
      </Router>  
    )
  }
}

export default connect()(App);
import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import LandingPage from './components/dashboard/LandingPage'
import AddRecipe from './components/dashboard/AddRecipe'
import EditRecipe from './components/dashboard/EditRecipe'
import RecipeList from './components/dashboard/RecipeList'
import Recipe from './components/dashboard/Recipe'

import { connect } from 'react-redux'
import { fetchAllRecipes } from './store/recipes/actions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllRecipes())
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
                  <Route path="/recipelist" component={RecipeList} />
                  <Route path="/recipe" component={Recipe} />
                </Switch>
            </Row>
          </Container>
        </div>
      </Router>  
    )
  }
}

export default connect()(App);
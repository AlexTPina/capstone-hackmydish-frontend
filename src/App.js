import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import LandingPage from './components/dashboard/LandingPage'
import RecipeAdd from './components/dashboard/RecipeAdd'
import RecipeEdit from './components/dashboard/RecipeEdit'
import RecipeHack from './components/dashboard/RecipeHack'
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
                  <Route path="/recipeAdd" component={RecipeAdd} />
                  <Route path="/recipeedit/:id" component={RecipeEdit} />
                  <Route path="/recipehack/:id" component={RecipeHack} />
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
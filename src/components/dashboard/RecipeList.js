import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";

const RecipeList = () => {
  const recipes = useSelector(state => state.recipes.all);
  let listOfRecipes;

  listOfRecipes = recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />);

  if (recipes && recipes.length) {
    return<div className="list-group">
      {listOfRecipes}
    </div>;
  } else {
    return <div>
      Loading...</div>;
  }
};
export default RecipeList;
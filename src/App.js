import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";


const App = () => {
  const APP_ID = 'a4075a01';
  const APP_KEY = '5c95ebf648ed40dd5bbeb6c011b04a02';

  const [recipes, setRecipes] = useState([]);

useEffect( () => {
  getRecipes();
}, []);

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
}

  return (
    <div className="app">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
        Search
        </button>
      </form>
      {recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          />
      ))}
    </div>
  );
};

export default App;

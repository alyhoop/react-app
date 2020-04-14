import React, {useEffect, useState} from 'react';
import './App.css';


const App = () => {
  const APP_ID = 'a4075a01';
  const APP_KEY = '5c95ebf648ed40dd5bbeb6c011b04a02';


useEffect( () => {

}, []);

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
}

  return (
    <div className="app">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
        Search
        </button>
      </form>
    </div>
  );
}

export default App;

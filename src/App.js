import React, {useEffect, useState} from 'react';
import './App.css';


const App = () => {
  const APP_ID = 'a4075a01';
  const APP_KEY = '5c95ebf648ed40dd5bbeb6c011b04a02';
  const exampleReq =
`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const [counter, setCounter] = useState(0);

useEffect(() => {
  console.log('Effect has been run.');
}, []);

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

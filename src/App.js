import React, {useState} from 'react';
import Tweet from './tweet';



function App() {

  const [users, setUsers] = useState([
      {name: 'Aly', message: 'hiii'},
      {name: 'm00p', message: 'hey'}
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;

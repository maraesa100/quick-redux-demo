import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { User } from './features/user/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <p>This is an example user profile update app to demo how slices, reducers etc works</p>
       <User />

       <p>The counter was part of the app scaffolding</p>
        <Counter />
      </header>
    </div>
  );
}

export default App;

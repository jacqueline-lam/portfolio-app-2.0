// import React from 'react';
import './App.css';
// Route defines possible routes
import {
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App" id="page-top">
      <NavBar />
      <Home />
      <About />
      Hello world
    </div>
  );
}

export default App;

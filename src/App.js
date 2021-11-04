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
      <Switch>
          {/* only first child <Route> that matches the location gets rendered */}
          {/* When URL matches specified path, render component */}
          <Route path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
      Hello world
    </div>
  );
}

export default App;

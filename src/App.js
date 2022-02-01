import 'bootswatch/dist/litera/bootstrap.min.css';
import './App.css';
// Route defines possible routes
import {
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogPostsContainer from './containers/BlogPostsContainer'

function App() {
  return (
    <div className="App" id="app">
      <NavBar />
      <Contact />
      {/* Switch only render first route that matches path */}
      <Switch>
        {/* only first child <Route> that matches the location gets rendered */}
        {/* When URL matches specified path, render component */}
        <Route path='/blog' component={BlogPostsContainer} />
        <Route path='/projects' component={ProjectsContainer} />
        <Route path='/about' component={About} />
        {/* Home to only display when URL is exactly '/' */}
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;

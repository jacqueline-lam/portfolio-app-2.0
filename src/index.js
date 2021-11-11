import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/litera/bootstrap.min.css';
// React-router to link to specific URLs then show/hide various components
// Router = base for app's routing - declare how react router will be used
// provider - React Context API - provides data to child components
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Animals from './pages/animals';
import Landing from './pages/landing';
import Map from './pages/map';



function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch>
      <Route path = "/" exact>
          <Landing/>
        </Route>
        <Route path = "/animals" exact>
          <Animals/>
        </Route>
        <Route path = "/map" exact>
          <Map/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

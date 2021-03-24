import React, { useState } from 'react';
import Admin from './comps/admin';
import Home from './comps/home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/admin" component = {Admin}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

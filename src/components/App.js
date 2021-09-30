import SignUp from "./SignUp";
import Home from "./Home";
import React from "react";
import Navbar from "./Navbar";
import Music from "./Music";
import Podcast from "./Podcast"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignUp/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/music">
           <Music/>
          </Route>
          <Route exact path="/podcast">
           <Podcast/>
          </Route>
          
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

import SignUp from "./SignUp";
import Home from "./Home";
import React from "react";
import Navbar from "./Navbar";
import Music from "./Music";
import Podcast from "./Podcast"
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Login from "./Login";

import Team from "./Team"

function App() {
  
   var user = localStorage.getItem("isLogin")
     


  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/home">
           { user ? <Home/>:<Redirect to="/"/>}
          </Route>
          <Route exact path="/music">
           <Music/>
          </Route>
          <Route exact path="/team">
           <Team/>
          </Route>
          <Route exact path="/podcast">
           <Podcast/>
          </Route>
          <Route exact path="/register">
           <SignUp/>
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;

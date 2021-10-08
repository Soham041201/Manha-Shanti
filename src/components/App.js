import React from "react";

import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Music from "../Pages/Music";
import Podcast from "../Pages/Podcast"
import Login from "../Pages/Login";
import Diary from "../Pages/Diary";
import Team from "../Pages/Team"
import ProtectedHomeRoute from "./ProtectedHomeRoute"
import Profile from "../Pages/Profile";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <ProtectedHomeRoute exact path="/profile" component={Profile}/>
          <Route exact path="/music" component={Music}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/podcast" component={Podcast}/>
          <Route exact path="/diary" component={Diary}/>
          <Route exact path="/register" component={SignUp}/>
          <Route exact path="/home" component={Home}/>
        </Switch> 
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

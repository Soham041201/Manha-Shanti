import SignUp from "./SignUp";
import Home from "./Home";
import React from "react";
import Navbar from "./Navbar";
import Music from "./Music";
import Podcast from "./Podcast"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Diary from "./Diary";
import Team from "./Team"
import ProtectedHomeRoute from "./ProtectedHomeRoute"
import Footer from "./Footer";
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <ProtectedHomeRoute exact path="/home" component={Home}/>
          <Route exact path="/music" component={Music}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/podcast" component={Podcast}/>
          <Route exact path="/diary" component={Diary}/>
          <Route exact path="/register" component={SignUp}/>
        </Switch> 
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

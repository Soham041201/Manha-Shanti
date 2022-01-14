import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import app from '../firebase/firebase';
import Diary from "../Pages/Diary";
import DiaryCreate from "../Pages/DiaryCreate";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Music from "../Pages/Music";
import Podcast from "../Pages/Podcast";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import Team from "../Pages/Team";
import Navbar from "./Navbar";
import ProtectedHomeRoute from "./ProtectedHomeRoute";



function App() {
  const [isLogin,setisLogin] = useState(false)
  const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    return setisLogin(true)
  } else {
    return setisLogin(false)
  }
});

  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <ProtectedHomeRoute exact path="/profile" component={Profile}/>
          <Route exact path="/music" component={Music}/>
          <Route exact path="/team" component={Team}/>
          <Route exact path="/podcast" component={Podcast}/>
          <ProtectedHomeRoute exact path="/diary" component={Diary}/>
          <ProtectedHomeRoute exact path="/diary/create" component={DiaryCreate}/>
          <Route exact path="/register" component={SignUp}/>
       
        {isLogin?<Redirect to="/"/>:<Route exact path="/login" component={Login}/>}  
        </Switch> 
      </div>
      
    </Router>
  );
}

export default App;

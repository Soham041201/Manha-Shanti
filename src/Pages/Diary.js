import React from 'react'
import {useState} from 'react';
import DiaryList from '../components/DiaryContent';
import DiarySideBar from '../components/DiarySideBar';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
export default function Diary() {
  //Get data from firebase json
    return (
        <div className="flex">
        <div className="sidebar w-1/8">
            <DiarySideBar/>
        </div>    
        <div className="content w-7/8 ">
        <h1 className="text-3xl">Your Diary</h1>
<Switch>
<Router>           
        <Route path="/diary/:id">
        <DiaryList title="Soham" date="4/12/2001" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
</Route>
        </Router>

</Switch>
                 
        </div>

        </div>
    )
}

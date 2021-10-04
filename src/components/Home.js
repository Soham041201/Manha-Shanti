import React from 'react';
import {withRouter} from 'react-router';
const Home = () => {
    return (
        <div class="flex" > 
        
            <div className="w-1/2">
             <h1 className="font-bold break-normal text-left text-7xl text-white  ml-20 mt-10 p-0.5">Manha<br/>Shanti<hr class="mt-3" id="line"/></h1>
            <p className="font-semibold text-white text-left ml-20 p-0.5 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className ="w-1/2">
             <img className="p-20 rounded-full"id="img" src ="./images/img1.jpg"alt=""/> 
            </div>

            {/* <p class= "text-center text-white ml-10 mt-10 p-1.5">Diary | Podcasts | Music</p> */}
            
        </div>
        
    );
}
  
export default withRouter(Home);

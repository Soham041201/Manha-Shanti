import React from 'react';
import {withRouter} from 'react-router';
const Home = () => {
    return (
        <div class="flex"> 
        
            <div class="w-1/2">
            <h1 class="font-bold break-normal text-left text-8xl text-white  ml-20 mt-10 p-0.5">Manha<br/>Shanti<hr class="mt-10" id="line"/></h1>
            </div>

            <div className ="w-1/2">
             <img class="p-20 rounded-full" src ="./images/img1.jpg" alt=""/> 
            </div>
 
            {/* <p class= "text-center text-white ml-10 mt-10 p-1.5">Diary | Podcasts | Music</p> */}
            
        </div>
        
    );
}
  
export default withRouter(Home);

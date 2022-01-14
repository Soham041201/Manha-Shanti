import { withRouter } from 'react-router';
import image1 from "../images/img1.jpg";
import {Box} from "@mui/material"
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        localStorage.setItem("tab", "home");
    }, [])
  
    return (
        <div class="flex" > 
            <div className="w-1/2">
             <h1 className="font-bold break-normal text-left text-7xl text-white  ml-20 mt-10 p-0.5">Manha<br/>Shanti<hr class="mt-3" id="line"/></h1>
            <p className=" text-white text-left ml-20 p-0.5 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className ="w-1/2">
                <Box sx={{borderRadius:'100%',ml:10}} >
                <img src={image1} className="rounded" alt="PeaceImage" height="100px" width="500px"/>
                </Box>
        
            </div>    
        </div>
        
    );
}
  
export default withRouter(Home);

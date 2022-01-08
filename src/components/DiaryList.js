import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
export default function DiaryList({ blogs }) {
  
  
  return (
    <Box sx={{overflow:'auto',ml:1, borderRadius:'20px',width:'300px'}}>
      <hr/>
      <Box sx={{overflow:'auto',height:'450px',backgroundColor:'#ECF87F'}}>
      {blogs ? blogs.map((route, index) => (  
        <div key={route.id} className="p-2 bg-white m-3 rounded-l">
          <Link to={`/diary/${index}`}>
            <h1>{route.date}</h1>
            <h3>{route.time}</h3>
          </Link>
        </div>
      )):<Loading/>}
      </Box>
      
  
    </Box>
  
  );
} 

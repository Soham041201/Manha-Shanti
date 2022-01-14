import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
export default function DiaryList({ blogs }) {
  
  
  return (
    <Box sx={{overflow:'auto',ml:1, borderRadius:'20px',width:'300px'}}>
      <Box sx={{overflow:'auto',height:'450px',backgroundColor:'#87a96b'}}>
      {blogs ? blogs.map((route, index) => (  
        <div key={route.id} className="p-2 bg-green-100 m-3 rounded-l">
          <Link to={`/diary/${index}`}>
            <h3>{route.date}</h3>
            <h3>{route.time}</h3>
          </Link>
        </div>
      )):<Loading/>}
      </Box>
      
  
    </Box>
  
  );
} 

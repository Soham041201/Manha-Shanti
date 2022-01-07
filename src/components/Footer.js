import React from "react";
import Box from '@mui/material/Box';
export default function Footer() {
  // const year = new Date()
  return (
    <footer className="footer">
      <Box sx={{  position: 'fixed',
        width: '100%',
        bottom: 0,
        backdropFilter: 'blur(4px)',
        display: 'flex',
        flexDirection: 'column',}}>
      <p className="bg-green-500 text-center text-white pt-10 bottom-0 ">
        Diary | Podcasts | Music
      </p>
      {/* <p className= "bg-green-500 text-center text-white  pb-3 pt-5 ">© Soham Sattigeri and Vaishnavi Deshpande {year.getFullYear()}</p> */}
      </Box>
      
    </footer>
  );
}

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box className="ml-14 mt-5" sx={{ display: 'flex' }}>
      <CircularProgress color="secondary"/>
    </Box>
  );}

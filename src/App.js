import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: "black"}}>
      <Navbar />
      <Routes>
        <Route to='/' element={<Feed/>} />
        <Route to='/video/:id' element={<VideoDetails/>} />
        <Route to='/channel/:id' element={<ChannelDetails/>} />
        <Route to='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
    </Box>
  </BrowserRouter>
)
;

export default App;
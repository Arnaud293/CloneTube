import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetails = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`/channels?part=snippet&id=${id}`)
    .then((data) => setChannel(data?.items[0]))

    fetchFromAPI(`/search?channelId=${id}&part="snippet&order=date`)
    .then((data) => setVideos(data?.items))
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(135deg, rgba(255,0,0,1) 0%, rgba(0,0,0,0.5587185557816876) 87%)', zIndex: 10, height: '300px'}}/>
        <ChannelCard channel={channel} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails
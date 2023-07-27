import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { VideoCard, ChannelCard, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      // console.log(data);
      setChannelDetail(data.items[0]);
    });
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        console.log(data);
        setVideos(data?.items);
      }
    );
  }, [id]);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
  };
  const randomPercentage = () => {
    const min=1, max = 100;
    return randomNumberInRange(min, max);
  };
  const randomColor = () => {
    const min=1, max = 256;
    return `rgba(${randomNumberInRange(min, max)},${randomNumberInRange(min, max)},${randomNumberInRange(min, max)}, 1)`;
  };

  

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              `linear-gradient(90deg, ${randomColor()} 0%, ${randomColor()} ${randomPercentage()}%, ${randomColor()} 100%)`,
              height:'250px',
              zIndex:10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
      </Box>
      <Box display="flex" p="2">
          <Box sx={{mr: {sm: '100px'}}}/>
            <Videos videos={videos}/>
          
      </Box>
    </Box>
  );
};

export default ChannelDetail;

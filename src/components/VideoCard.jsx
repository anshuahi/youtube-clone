import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
  demoVideoUrl,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
 
//   console.log(videoId, snippet);
  return (
    <Card sx={{width: {md: '356px', xs:'320px'}, boxShadow:'none', borderRadius:0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: '356px', height: 180 }}
        />
        {/* <span>{snippet?.thumbnails?.high?.url}</span> */}
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: 100, width:356}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                {snippet.title.slice(0, 80) || demoVideoTitle.slice(0, 80)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId }` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {snippet.channelTitle || demoChannelTitle}
                <CheckCircle sx={{color: "gray", fontSize: 15, ml:'5px'}}/>
            </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

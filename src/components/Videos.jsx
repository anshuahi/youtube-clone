import { Stack, Box } from "@mui/material";
import {VideoCard, ChannelCard} from "./";

const Videos = ({videos, direction}) => {
  if(!videos?.length){
    return 'Loading...';
  }
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
      {
        videos.map((video, idx) => {
          return <Box key={idx}>
            {video.id.videoId && <VideoCard video={video}/>}
            {video.id.channelId && <ChannelCard channelDetail={video}/>}
          </Box>
        })
      }
    </Stack>
  )
}

export default Videos;
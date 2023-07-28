import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`).then((data) => {
      // console.log(data);
      setVideoDetail(data?.items[0]);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        // console.log(data);
        setVideos(data?.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) {
    return (
      <Box minHeight="95vh">
        <Typography
          variant="h1"
          color="white"
          margin="auto"
          width="max-content"
        >
          Loading...
        </Typography>
      </Box>
    );
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="80vh" padding="3px">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              style={{border: "5px solid gray"}}
            />
            <Typography variant="h5" color="white" p={1} fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="white"
                  variant={{ sm: "subtitle1", md: "h6" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ color: "gray", fontSize: 12, ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;

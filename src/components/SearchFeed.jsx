import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${}`).then((data) => {
      setVideos(data.items);
    });
  }, []);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Searcj Results for: 
        <span style={{ color: "#F31503", marginLeft: "10px" }}> Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;

import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRaduis: "20px",
        // border: "1px solid white",
        width: { xs: "467px", sm: " 350px", md: "280px" },
        height: "305px",
        margin: "auto",
        marginTop: marginTop,
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thubmnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: "20px",
            }}
          />
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 19, color: "gray", ml: "5px" }} />
          </Typography>
        </CardContent>
      </Link>
      ChannelCard
    </Box>
  );
};

export default ChannelCard;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "../App.css";
const HorizontalCard = ({ title, content, image }) => {
  return (
    <Card
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", width: "400px" }}
      className="scroll-card"
    >
      <CardContent
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Typography sx={{ color: "white" }} variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="body2"
          color="text.secondary"
        >
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "center", mr: 1 }}
          >
            <CalendarMonthIcon />
          </Box>
          {content}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 140 }} image={image} title={title}>
        <IconButton
          sx={{
            position: "relative",
            bottom: -90,
            left: 10,
            zIndex: 10,
            backgroundColor: "grey",
          }}
        >
          <ArrowOutwardIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          sx={{
            position: "relative",
            bottom: -90,
            right: -220,
            zIndex: 10,
          }}
        >
          <Button variant="contained">Contained</Button>
        </IconButton>
      </CardMedia>
    </Card>
  );
};

export default HorizontalCard;

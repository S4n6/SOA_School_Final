import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Video from "../components/movie/video";
import DetailMovie from "../components/movie/detailFilm";
import Comment from "../components/comment/comment";
import Eposide from "../components/movie/eposide";

function Watching() {
  return (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}
    >
      <Video/>
      <Box
        sx={{
          display: "flex",
          justifyContent:'space-evenly',
          width: '100%',
          height: '100%',
        }}
      >
        <DetailMovie/>  
        <Eposide/>
      </Box>
      <Comment/>
    </Box>
  );
}

export default Watching;

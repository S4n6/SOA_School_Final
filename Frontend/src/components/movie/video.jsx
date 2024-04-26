import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Video() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CardMedia
          component="video"
          src="https://assets.codepen.io/6093409/river.mp4"
          autoPlay
          controls
          sx={{
            // This will make the video fit its container
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box 
                // variant="contained" 
                // aria-label="Basic button group"
                sx={{
                    gap : 2,
                    display: "flex",
                }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  marginRight: 2,
                }}
              >
                <Typography variant="h6">Server</Typography>
                <Button>One</Button>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Server</Typography>
                <Button>Two</Button>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Server</Typography>
                <Button>Three</Button>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Video;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import StorageIcon from '@mui/icons-material/Storage';

function Video() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: 'flex', // This will make the Card a flex container
          justifyContent: 'center', // This will center the items horizontally
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '8px',
        }}
      >
        <CardMedia
          component="video"
          src="https://assets.codepen.io/6093409/river.mp4"
          autoPlay
          controls
          sx={{
            // This will make the video fit its container
            width: "70%",
            objectFit: "contain",
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
                    gap : '2.5rem',
                    display: "flex",
                    backgroundColor: 'rgba(25, 21, 56, 1)',
                    borderRadius: 5,
                    padding: 2,
                    color: 'white',
                    width: '25%',
                    height: '3rem',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: 5,
                  '&:hover': { 
                    backgroundColor: 'rgba(44, 20, 58, 1.0)',
                    borderColor: 'rgba(238, 15, 89, 1.0)',
                    borderWidth: 1,
                    borderStyle: 'solid',
                  },
                  padding: '4px 8px',
                }}
              >
                <Typography 
                  variant="subtitle1"
                  sx={{
                    display: 'flex', // This will make the Typography a flex container
                    alignItems: 'center', // This will center the items vertically
                  }}
                >
                  <StorageIcon 
                    fontSize="small"
                    sx={{
                      marginRight: '4px',
                    }}
                  />
                  Server
                </Typography>
                <Typography variant="h5">One</Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: 5,
                  '&:hover': { 
                    backgroundColor: 'rgba(44, 20, 58, 1.0)',
                    borderColor: 'rgba(238, 15, 89, 1.0)',
                    borderWidth: 1,
                    borderStyle: 'solid',
                  },
                  padding: '4px 8px',
                }}
              >
                <Typography 
                  variant="subtitle1"
                  sx={{
                    display: 'flex', // This will make the Typography a flex container
                    alignItems: 'center', // This will center the items vertically
                  }}
                >
                  <StorageIcon 
                    fontSize="small"
                    sx={{
                      marginRight: '4px',
                    }}
                  />
                  Server
                </Typography>
                <Typography variant="h5">Two</Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: 5,
                  '&:hover': { 
                    backgroundColor: 'rgba(44, 20, 58, 1.0)',
                    borderColor: 'rgba(238, 15, 89, 1.0)',
                    borderWidth: 1,
                    borderStyle: 'solid',
                  },
                  padding: '4px 8px',
                }}
              >
                <Typography 
                  variant="subtitle1"
                  sx={{
                    display: 'flex', // This will make the Typography a flex container
                    alignItems: 'center', // This will center the items vertically
                  }}
                >
                  <StorageIcon 
                    fontSize="small"
                    sx={{
                      marginRight: '4px',
                    }}
                  />
                  Server
                </Typography>
                <Typography variant="h5">Three</Typography>
              </Box>
              
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Video;

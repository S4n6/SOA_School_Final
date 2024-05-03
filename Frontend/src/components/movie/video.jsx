import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import StorageIcon from "@mui/icons-material/Storage";

function Video({ video }) {
  const [videoError, setVideoError] = React.useState(false);
  const handleVideoError = () => {
    setVideoError(true);
  };

  const videoUrl = "https://www.youtube.com/watch?v=J1jzs6dk4bs";
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "8px",
        }}
      >
        {videoError ? (
            <CardMedia
            component="video"
            src={videoUrl}
            autoPlay
            controls
            sx={{
              width: "70%",
              objectFit: "contain",
            }}
            />
        ) : (
          <CardMedia
            component="video"
            src={video}
            autoPlay
            controls
            onError={handleVideoError}
            sx={{
              width: "70%",
              objectFit: "contain",
            }}
            />
          )}
        <CardActionArea>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                gap: "2.5rem",
                display: "flex",
                backgroundColor: "rgba(25, 21, 56, 1)",
                borderRadius: 5,
                padding: 2,
                color: "white",
                width: "25%",
                height: "3rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: 5,
                  "&:hover": {
                    backgroundColor: "rgba(44, 20, 58, 1.0)",
                    borderColor: "rgba(238, 15, 89, 1.0)",
                    borderWidth: 1,
                    borderStyle: "solid",
                  },
                  padding: "4px 8px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StorageIcon
                    fontSize="small"
                    sx={{
                      marginRight: "4px",
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
                  "&:hover": {
                    backgroundColor: "rgba(44, 20, 58, 1.0)",
                    borderColor: "rgba(238, 15, 89, 1.0)",
                    borderWidth: 1,
                    borderStyle: "solid",
                  },
                  padding: "4px 8px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <StorageIcon
                    fontSize="small"
                    sx={{
                      marginRight: "4px",
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
                  "&:hover": {
                    backgroundColor: "rgba(44, 20, 58, 1.0)",
                    borderColor: "rgba(238, 15, 89, 1.0)",
                    borderWidth: 1,
                    borderStyle: "solid",
                  },
                  padding: "4px 8px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex", // This will make the Typography a flex container
                    alignItems: "center", // This will center the items vertically
                  }}
                >
                  <StorageIcon
                    fontSize="small"
                    sx={{
                      marginRight: "4px",
                    }}
                  />
                  Server
                </Typography>
                <Typography variant="h5">Three</Typography>
              </Box>
            </Box>
              <Button
                sx={{
                  right: 0,
                  position: "absolute",
                  whiteSpace: 'normal',
                  width: "10%",
                  marginRight: '16px',
                  marginTop: '4px',
                }}
              >
                Thêm vào danh sách xem sau
              </Button>

          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Video;

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function WatchListItem() {
  return (
    <>
      <Card 
        sx={{ 
            maxWidth: 500,
            ":hover": {
                cursor: "pointer"
            },
            borderRadius: "1rem",
            display: "flex",
            padding: "1rem",
        }}
      >
       <CardMedia
        component="img"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstirBRd3pYYdCk2HtCbpa73eptwXw2Tt0TA&s"
        alt="description_of_the_image"
        sx={{ 
            width: '50%' 
        }}
      />
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "50%",
            padding: "1rem"
        
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
            Film Name
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
            90 min
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
            Action, Dramma, Comedy
        </Typography>
      </Box>
        
      </Card>
    </>
  );
}

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstirBRd3pYYdCk2HtCbpa73eptwXw2Tt0TA&s

export default WatchListItem;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MovieItem({ movie }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://i0.wp.com/exquisitemag.com/wp-content/uploads/2022/07/2A56CE5C-3D67-4F7A-B0CD-3406CA97FB2B.jpeg?resize=405%2C600&ssl=1"
        title="green iguana"
      />
      <CardContent>
         <Typography variant="body2" color="text.secondary">
            2024 - 90 min
        </Typography>
        <Typography style={{ marginRight: "20px" }}>
          Movie
        </Typography>
      </CardContent>
      <Typography gutterBottom variant="h5" c omponent="div" align="center">
        Thor 3
      </Typography>
    </Card>
  );
}

export default MovieItem;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function MovieItem({ film }) {
    const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        "&:hover": {
          boxShadow: "0 0 4px 0 rgba(0,0,0,0.2)",
          cursor: "pointer",
        },
      }}
      onClick={() => {
        console.log("Card clicked", film);
        navigate(`/${film?.type}/${film?.id}`);
      }}
    >
      <CardMedia
        sx={{ height: 250 }}
        image="https://i0.wp.com/exquisitemag.com/wp-content/uploads/2022/07/2A56CE5C-3D67-4F7A-B0CD-3406CA97FB2B.jpeg?resize=405%2C600&ssl=1"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {film?.firstYearRelease} - {film?.duration} min
        </Typography>
        <Typography style={{ marginRight: "20px" }}>{film?.type}</Typography>
      </CardContent>
      <Typography gutterBottom variant="h6" c omponent="div" align="center">
        {film?.name}
      </Typography>
    </Card>
  );
}

export default MovieItem;

import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MovieRecommendItem from "./movieRecommendItem";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from '@mui/icons-material/Add';

function MoviesRecommend() {
  return (
    <Box
      sx={{
        marginX: "8px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
            marginY: "12px",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
          <Box
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
          <MovieIcon sx={{ mr: 1 }}/>
            Movies Trending
          </Box>
          <Button
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            <AddIcon sx={{ mr: 1 }}/>
            View all
          </Button>
        </Box>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <MovieRecommendItem />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MoviesRecommend;

import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import MovieRecommendItem from "./movieRecommendItem";

function MoviesRecommend(){
      return (
         <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <MovieRecommendItem/>
                </Grid>
            </Grid>
         </Box>
      )
}


export default MoviesRecommend;
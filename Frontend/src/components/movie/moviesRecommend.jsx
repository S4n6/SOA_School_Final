import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MovieRecommendItem from "./movieRecommendItem";
import MovieIcon from "@mui/icons-material/Movie";

function MoviesRecommend({ films }) {
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
                <Box display="flex" alignItems="center" justifyContent="center">
                    <MovieIcon sx={{ mr: 1 }} />
                    Movies Trending
                </Box>
            </Typography>
            <Grid container spacing={2}>
                {films.map((film, index) => {
                    return <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                        <MovieRecommendItem film={film}/>
                    </Grid>
                })}
            </Grid>
        </Box>
    );
}

export default MoviesRecommend;

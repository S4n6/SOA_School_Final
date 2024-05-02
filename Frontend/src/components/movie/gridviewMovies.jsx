import { Grid } from "@mui/material";
import MovieItem from "./movieItem";

function GridViewMovies({ films }) {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                width: "100%",
                marginTop: "16px",
                padding: "8px",
            }}
        >

            {films?.map((movie, index) => {
                return (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                        <MovieItem film={movie} />
                    </Grid>
                )
            })}

        </Grid>
    );
}

export default GridViewMovies;

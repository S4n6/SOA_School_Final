import { Grid } from "@mui/material";
import MovieItem from "./movieItem";

function GridViewMovies({ movies }) {
  const movie = {
    id: 1,
    title: "Movie Title 1",
    poster_path: "/path/to/movie1.jpg",
  };
  const moviess = [
    movie,
    movie,
    movie,
    movie,
    movie,
    movie,
    movie,
    movie,
    movie,
    movie,
    movie,
    movie,
  ];
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
     
        {moviess?.map((movie, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <MovieItem movie={movie} />
            </Grid>
          )
        })}
      
    </Grid>
  );
}

export default GridViewMovies;

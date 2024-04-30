import { Box, color } from "@mui/system";
import Search from "../components/search";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Grid,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";
import GridViewMovies from "../components/movie/gridviewMovies";
import Movie from "@mui/icons-material/Movie";
import MoviesRecommend from "../components/movie/moviesRecommend";


// Hàm để render ô chọn category
function RenderSelectByCategory(categoryName, listCategory, setCategory) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [categories, setCategories] = useState([]);
  return (
    <FormControl sx={{ m: 1, width: "100%" }}>
      <InputLabel id="demo-multiple-checkbox-label">{categoryName}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={categories}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {listCategory.map((category) => (
          <MenuItem key={category} value={category}>
            <Checkbox checked={categories.indexOf(category) > -1} />
            <ListItemText primary={category} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function AllFilm() {
  const [genre, setGenre] = useState([]);
  const [country, setCountry] = useState([]);
  const [rating, setRating] = useState([]);
  const [year, setYear] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setGenre([
      "Action",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
    ]);
    setCountry(["Vietnam", "Korea", "Japan", "China", "USA", "UK"]);
    setRating(["1", "2", "3", "4", "5"]);
    setYear(["2021", "2020", "2019", "2018", "2017"]);
    setFilms([
      {
        id: "1",
        title: "The Shawshank Redemption",
        genre: ["Drama"],
        country: "USA",
        rating: 4.5,
        year: 1994,
      },
      {
        id: "2",
        title: "The Godfather",
        genre: ["Crime", "Drama"],
        country: "USA",
        rating: 4.5,
        year: 1972,
      },
      {
        id: "3",
        title: "The Dark Knight",
        genre: ["Action", "Crime", "Drama"],
        country: "USA",
        rating: 4.5,
        year: 2008,
      },
    ]);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "8px",
      }}
    >
      {/* Thanh filter chứa các category */}
      <Box
        sx={{
          marginTop: "10rem",
          color: "black",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <TextField
              sx={{
                color: "black",
                width: "100%",
                height: "100%",
              }}
              placeholder="Search..."
              onChange={(event) => {
                // Handle search here...
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
            {RenderSelectByCategory("Genre", genre, setGenre, genre)}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            {RenderSelectByCategory("Country", country, setCountry, country)}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            {RenderSelectByCategory("Rating", rating, setRating, rating)}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            {RenderSelectByCategory("Year", year, setYear, year)}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Button
              sx={{
                border: "1px solid",
                height: "100%",
                width: "80%",
                textAlign: "center",
              }}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* END Thanh filter chứa các category */}

      {/* Danh sách phim */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          padding: "8px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "75%",
            marginRight: "2rem",
            // border: "1px solid",
            // borderColor: "background.default.100",
            boxShadow: 5,
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <GridViewMovies />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
              marginBottom: "2rem",
            }}
          >
            <Pagination count={10} showFirstButton showLastButton />
          </Box>
        </Box>
        <Box
          sx={{
            width: "25%",
            boxShadow: 5,
            borderRadius: "8px",
            padding: "4px",
            paddingBottom: "8px",
          }}
        >
          <MoviesRecommend />
        </Box>
      </Box>
      {/* END Danh sách phim */}
        
    </Box>
  );
}

export default AllFilm;

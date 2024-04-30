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
} from "@mui/material";
import { useEffect, useState } from "react";

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
    <FormControl sx={{ m: 1, width: 300 }}>
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
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          marginTop: "10rem",
          color: "black",
          display: "flex",
          width: "100%", 
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <TextField
              sx={{
                color: "black",
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
              }}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AllFilm;

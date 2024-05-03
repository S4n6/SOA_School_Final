import {
  Button,
  Checkbox,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { createMovie, updateMovie } from "../../api/movie";

function AddAndEditMovie({ film, isOpen, setIsOpen }) {
  console.log("isOpenppppppp", isOpen);
  const [open, setOpen] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banner, setBanner] = useState(null);
  const [video, setVideo] = useState(null);
  const [expectedReleaseDate, setExpectedReleaseDate] = useState(null);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [firstYearRelease, setFirstYearRelease] = useState(0);
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [productionCompany, setProductionCompany] = useState("");
  const [status, setStatus] = useState("");
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
    setOpen(newOpen);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoriesSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("banner", banner);
    formData.append("video", video);
    formData.append("expectedReleaseDate", new Date(expectedReleaseDate));
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("firstYearRelease", firstYearRelease);
    formData.append("countryOfOrigin", countryOfOrigin);
    formData.append("productionCompany", productionCompany);
    formData.append("status", status);
    categoriesSelected.forEach((genre) => formData.append("genres[]", genre));
    actors.forEach((actor) => formData.append("actors[]", actor));
    formData.append("description", description);
    if(film) {
      updateMovie(formData, film?.id)
      .then((value) => {
        console.log('updated movie', value);
      })
      .catch((error) => {
        console.error(error);
      });
    }else{
      createMovie(formData)
      .then((value) => {
        console.log('created movie', value);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  useEffect(() => {
    setCategories([
      "Action",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "CRIME",
      "DRAMA",
    ]);
  }, []);

  const DrawerList = (
    <Box sx={{ width: "50rem", marginTop: "5rem" }} role="presentation">
      <Paper>
        <Typography variant="h5" sx={{ padding: "1rem" }}>
          {film ? "Edit Movie" : "Add Movie"}
        </Typography>
        <Box
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Movie Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Duration"
            variant="outlined"
            fullWidth
            onChange={(e) => setDuration(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            fullWidth
            onChange={(e) => setCountryOfOrigin(e.target.value)}
          />
           <TextField
            id="outlined-basic"
            label="Company"
            variant="outlined"
            fullWidth
            onChange={(e) => setProductionCompany(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            fullWidth
            onChange={(e) => setStatus(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Casts / Crews"
            variant="outlined"
            helperText='Separate by ","'
            fullWidth
            onChange={(e) => setActors(e.target.value.split(","))}
          />
           <TextField
            id="outlined-basic"
            label="Year release"
            variant="outlined"
            fullWidth
            type="number"
            InputProps={{
              inputProps: { 
                min: 1900, max: new Date().getFullYear() 
              }
            }}
            onChange={(e) => {
              const year = e.target.value;
              if (year >= 1900 && year <= new Date().getFullYear()) {
                setExpectedReleaseDate(year);
              }
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="outlined-basic"
            label="Expected release date"
            variant="outlined"
            type="date"
            fullWidth
            onChange={(e) => setExpectedReleaseDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={categoriesSelected}
            onChange={handleChange}
            input={<OutlinedInput label="Category" />}
            renderValue={(selected) => selected.join(", ")}
            sx={{
              width: "100%",
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                <Checkbox checked={categoriesSelected.indexOf(category) > -1} />
                <ListItemText primary={category} />
              </MenuItem>
            ))}
          </Select>

          {/* <TextField
            id="outlined-basic"
            label="URl Poster"
            variant="outlined"
            fullWidth
          />

        <TextField
            id="outlined-basic"
            label="URL Video"
            variant="outlined"
            fullWidth
          /> */}

          <TextField
            label="Banner"
            type="file"
            inputProps={{ accept: "image/*" }}
            onChange={(e) => setBanner(e.target.files[0])}
          />
          <TextField
            label="Video"
            type="file"
            // inputProps={{ accept: "video/*" }}
            onChange={(e) => setVideo(e.target.files[0])}
          />
          <Button
            sx={{
              width: "30%",
              height: "3rem",
              marginLeft: "auto",
              marginBottom: "1rem",
            }}
            onClick={handleUpload}
          >
            Upload
          </Button>
        </Box>
      </Paper>
    </Box>
  );
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </Box>
  );
}

export default AddAndEditMovie;

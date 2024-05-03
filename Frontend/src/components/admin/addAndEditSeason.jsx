import {
  Autocomplete,
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
import { createSeason, getTVShows } from "../../api/tvShow";

function AddAndEditTvSeason({ film, isOpen, setIsOpen }) {
  console.log("isOpenppppppp", isOpen);
  const [open, setOpen] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [categories, setCategories] = useState([]);

  const [banner, setBanner] = useState(null);
  const [expectedReleaseDate, setExpectedReleaseDate] = useState(null);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [firstYearRelease, setFirstYearRelease] = useState(0);
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [productionCompany, setProductionCompany] = useState("");
  const [status, setStatus] = useState("");
  const [genres, setGenres] = useState([]);
  const [seasonNumber, setSeasonNumber] = useState(0);
  const [tvShowID, setTvShowID] = useState("");
  const [description, setDescription] = useState("");
  const [tvShow, setTvShow] = useState([]);
  const [tvShowSelected, setTvShowSelected] = useState('');
    
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {

    getTVShows('name='+tvShowID).then((data) => {
      console.log('data in admin', data);
      // setTvShow(data)
      const newTvShow = data.map((tvShowItem) => ({
        title: tvShowItem.name, 
        productionCompany: tvShowItem.productionCompany,
        id: tvShowItem.id,
      }));
      setTvShow(newTvShow);
    }).catch((error) => {
      console.log('error', error);
    });

  }, [tvShowID]);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
    setOpen(newOpen);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoriesSelected(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    const handleUpload = () => {
      const formData = new FormData();
      formData.append('banner', banner);
      formData.append('expectedReleaseDate', new Date(expectedReleaseDate));
      formData.append('name', name);
      formData.append('duration', duration);
      formData.append('firstYearRelease', firstYearRelease);
      formData.append('countryOfOrigin', countryOfOrigin);
      formData.append('productionCompany', productionCompany);
      formData.append('status', status);
      categoriesSelected.forEach(genre => formData.append('genres[]', genre));
      formData.append('seasonNumber', seasonNumber);
      formData.append('tvShowID', tvShowSelected?.id);
      formData.append('description', description);
      console.log('upload');
      createSeason(formData)
        .then((value) => {
          console.log('created season', value);
        })
        .catch((error) => {
          console.error('error', error);
        });
    }

  useEffect(() => {
    setCategories([
        'ACTION',
        'ADVENTURE',
        'Animation',
        'Biography',
        'COMEDY',
        'CRIME',  
    ]);
  }, []);

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },]

  const DrawerList = (
    <Box sx={{ width: "50rem", marginTop: "5rem" }} role="presentation">
      <Paper>
        <Typography variant="h5" sx={{ padding: "1rem" }}>
          {film ? "Edit Season" : "Add Season"}
        </Typography>
        <Box
            sx={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
          <Box
            sx={{
              display: 'flex'
            }}
          >
           <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={tvShow}
              getOptionLabel={(option) => option.title}
              sx={{ width: 300 }}
              onInputChange={(event, newValue) => {
                setTvShowID(newValue);
              }}
              onChange={(event, newValue) => {
                console.log('newValue', newValue);
                setTvShowSelected(newValue);
              }}
              renderInput={(params) => <TextField {...params} label="Tv Show" />}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={tvShowSelected?.productionCompany}
              disabled
            />
          </Box>
          <TextField
            id="outlined-basic"
            label="Season Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
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
            label="Status"
            variant="outlined"
            fullWidth
            onChange={(e) => setStatus(e.target.value)}

          />

          <TextField
            id="outlined-basic"
            label="Season Number"
            type="number"
            variant="outlined"
            fullWidth
            onChange={(e) => setSeasonNumber(e.target.value)}

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
            label="Duration"
            type="number"
            variant="outlined"
            fullWidth
            onChange={(e) => setDuration(e.target.value)}

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

          <TextField
            label="Banner"
            type="file"
            inputProps={{ accept: "image/*" }}
            onChange={(e) => setBanner(e.target.files[0])}
          />

        <Button
            sx={{
                width:'30%',
                height: '3rem',
                marginLeft: 'auto',
                marginBottom: '1rem',
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

export default AddAndEditTvSeason;

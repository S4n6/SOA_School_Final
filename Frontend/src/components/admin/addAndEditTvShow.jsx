import {
  Avatar,
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
import { createTvShow, updateTvShow } from "../../api/tvShow";

function AddAndEditTvShow({ film, isOpen, setIsOpen }) {
  console.log("isOpenppppppp", isOpen);
  const [open, setOpen] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState( film ? film?.genres : []);
  const [categories, setCategories] = useState([]);
  const [banner, setBanner] = useState(null);
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
      setOpen(newOpen);
      setIsOpen(newOpen);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoriesSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("banner", banner);
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("firstYearRelease", firstYearRelease);
    formData.append("countryOfOrigin", countryOfOrigin);
    formData.append("productionCompany", productionCompany);
    formData.append("status", status);
    categoriesSelected.forEach((genre) => formData.append("genres[]", genre));
    actors.forEach((actor) => formData.append("actors[]", actor));
    formData.append("description", description);
    if (film) {
      updateTvShow(formData, film?.id)
        .then((data) => {
          console.log("data update tv show", data);
        })
        .catch((error) => {
          console.error("error", error);
        });
    }else{
        createTvShow(formData)
            .then((data) => {
                console.log('data create tv show', data);
            })
            .catch((error) => {
                console.error('error', error);
            })
    }
    
  }

  useEffect(() => {
    setCategories([
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',
        'MYSTERY',
        'DRAMA',
        'FANTASY',
        'HORROR',
    ]);
  }, []);

  const DrawerList = (
    <Box sx={{ width: "50rem", marginTop: "5rem" }} role="presentation">
      <Paper>
        <Typography variant="h5" sx={{ padding: "1rem" }}>
          {film ? "Edit TV Show" : "Add TV Show"}
        </Typography>
        <Box
            sx={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
          {
            film ? (
              <Avatar
                alt="Image Film"
                src={film?.banner}
                sx={{ 
                  width: 80, height: 80 ,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            ) : (
              <></>
            )
          }
          <TextField
            id="outlined-basic"
            label="TV Show Name"
            variant="outlined"
            fullWidth
            value={film?.name || ""}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Duration"
            variant="outlined"
            fullWidth
            value={film?.duration || ""}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setDuration(e.target.value)}

          />
           <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
            value={film?.description || ""}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setDescription(e.target.value)}
          />
           <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            fullWidth
            value={film?.countryOfOrigin || ""}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setCountryOfOrigin(e.target.value)}

          />
          <TextField
            id="outlined-basic"
            label="Casts / Crews"
            variant="outlined"
            fullWidth
            value={film?.actors?.join(', ') || ""}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setActors(e.target.value.split(","))}

          />
          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            fullWidth
            value={film?.status || ""}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setStatus(e.target.value)}

          />

           <TextField
            id="outlined-basic"
            label="Company"
            variant="outlined"
            fullWidth
            value={film?.productionCompany || ""}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setProductionCompany(e.target.value)}
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
            id="outlined-basic"
            label="Year release"
            variant="outlined"
            fullWidth
            type="number"
            value={film?.firstYearRelease || ""}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              inputProps: { 
                min: 1900, max: new Date().getFullYear() 
              }
            }}
            onChange={(e) => {
              const year = e.target.value;
              if (year >= 1900 && year <= new Date().getFullYear()) {
                setFirstYearRelease(year);
              }
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Banner"
            type="file"
            InputLabelProps={{ shrink: true }}
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

export default AddAndEditTvShow;

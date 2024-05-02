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

function AddAndEditMovie({ film, isOpen, setIsOpen }) {
  console.log("isOpenppppppp", isOpen);
  const [open, setOpen] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [categories, setCategories] = useState([]);
    
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
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleUpload = () => {
    console.log("Upload");
  }

  useEffect(() => {
    setCategories([
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Crime',  
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
          />
          <TextField
            id="outlined-basic"
            label="Duration"
            variant="outlined"
            fullWidth
          />
           <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
          />
           <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Casts / Crews"
            variant="outlined"
            fullWidth
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
            label="URl Poster"
            variant="outlined"
            fullWidth
          />

        <TextField
            id="outlined-basic"
            label="URL Video"
            variant="outlined"
            fullWidth
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

export default AddAndEditMovie;

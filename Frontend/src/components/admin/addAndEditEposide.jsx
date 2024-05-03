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
import { createEposide, getSeasonByTvShow, getTVShows } from "../../api/tvShow";

function AddAndEditTvEposide({ film, isOpen, setIsOpen }) {
  console.log("isOpenppppppp", isOpen);
  const [open, setOpen] = useState(false);

  const [video, setVideo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [expectedReleaseDate, setExpectedReleaseDate] = useState(null);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const [tvShowID, setTvShowID] = useState("");
  const [tvShow, setTvShow] = useState([]);
  const [tvShowSelected, setTvShowSelected] = useState("");
  const [season, setSeason] = useState([]);
  const [seasonID, setSeasonID] = useState("");

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
    setOpen(newOpen);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('video', video);  // video should be a File object
    formData.append('banner', banner);  // banner should be a File object
    formData.append('expectedReleaseDate', new Date(expectedReleaseDate));
    formData.append('name', name);
    formData.append('duration', duration);
    formData.append('status', status);
    formData.append('episodeNumber', episodeNumber);
    formData.append('seasonID', seasonID);
    createEposide(formData)
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    console.log("Upload");
  };

  useEffect(() => {
    getSeasonByTvShow("tvShowID=" + tvShowSelected?.id)
      .then((data) => {
        console.log("data in admin", data);
        const newSeason = data.map((seasonItem) => ({
          title: seasonItem.name,
          productionCompany: seasonItem.productionCompany,
          id: seasonItem.id,
        }));
        setSeason(newSeason);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [tvShowSelected]);

  useEffect(() => {
    getTVShows("name=" + tvShowID)
      .then((data) => {
        console.log("data in admin", data);
        // setTvShow(data)
        const newTvShow = data.map((tvShowItem) => ({
          title: tvShowItem.name,
          productionCompany: tvShowItem.productionCompany,
          id: tvShowItem.id,
        }));
        setTvShow(newTvShow);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [tvShowID]);

  const DrawerList = (
    <Box sx={{ width: "50rem", marginTop: "5rem" }} role="presentation">
      <Paper>
        <Typography variant="h5" sx={{ padding: "1rem" }}>
          {film ? "Edit Eposide" : "Add Eposide"}
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
              display: "flex",
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
                console.log("newValue", newValue);
                setTvShowSelected(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Tv Show" />
              )}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={tvShowSelected?.productionCompany}
              disabled
            />
          </Box>

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={season}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              setSeasonID(newValue.id);
            }}
            renderInput={(params) => <TextField {...params} label="Season" />}
          />

          <TextField
            id="outlined-basic"
            label="Eposide Name"
            variant="outlined"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            type="number"
            label="Eposide Number"
            variant="outlined"
            fullWidth
            onChange={(e) => setEpisodeNumber(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            type="number"
            label="Duration"
            variant="outlined"
            fullWidth
            onChange={(e) => setDuration(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            fullWidth
            onChange={(e) => setStatus(e.target.value)}
          />

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

export default AddAndEditTvEposide;

import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import GridViewMovies from "../components/movie/gridviewMovies";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { createWatchList } from "../api/watchlist";

function WatchList() {
  const { user } = useContext(AuthContext);
  const [films, setFilms] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateWatchList = () => {
    console.log(name);
    createWatchList(user, name)
    .then((value) => {
      console.log(value);
      setOpen(false);
    })
    .catch((error) => {
        console.error(error);
        setOpen(false);
    });
  }

  useEffect(() => {
    console.log('userrrr', user);

  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Watch List</Typography>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ marginTop: "1rem" }}
      >
        Tạo WatchList
        </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tạo Watch List mới
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tên Watch List"
            type="text"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Hủy</Button>
          <Button onClick={handleCreateWatchList} autoFocus>
            Tạo
          </Button>
        </DialogActions>
      </Dialog>
      <Box>
        <GridViewMovies films={films}/>
      </Box>
    </Box>
  );
}

export default WatchList;

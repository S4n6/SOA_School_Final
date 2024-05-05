import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import WatchListItem from "./watchListItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useState } from "react";

function Item({setIsOpenListFilm, watchlistItem, setWatchlistSelected}) {
  const [openMenu, setOpenMenu] = useState(false);
  const clickItem = () => {
    setIsOpenListFilm(true);
    setWatchlistSelected(watchlistItem);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "1rem",
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          ":hover": {
            cursor: "pointer",
          },
        }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstirBRd3pYYdCk2HtCbpa73eptwXw2Tt0TA&s"
        title="green iguana"
        onClick={() => clickItem()}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            ":hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => clickItem()}
        >
          <Typography gutterBottom variant="h5" component="div">
            {watchlistItem?.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {watchlistItem?.movies?.length + watchlistItem?.tvShows?.length} videos
          </Typography>
        </CardContent>
        <Box
          sx={{
            marginRight: "8px",
            ":hover": {
              cursor: "pointer",
            },
            position: "relative",
            
          }}
        >
          <MoreVertIcon onClick={() => setOpenMenu(!openMenu)} />
          {openMenu && (
            <Box
              sx={{
                position: "absolute",
                top: "-90%",
                right: "80%",
                width: "7rem",
                height: "5rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                borderRadius: "1rem",
              }}
            >
              <IconButton>
                <Icon>
                  <EditIcon fontSize="small" />
                </Icon>
                <Typography variant="subtitle2" component="div">
                  Edit
                </Typography>
              </IconButton>
              <IconButton>
                <Icon>
                  <RemoveCircleIcon fontSize="small" />
                </Icon>
                <Typography variant="subtitle2" component="div">
                  Xóa
                </Typography>
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
}

function WatchListContainer({ setIsOpenListFilm, watchlist, setWatchlistSelected }) {

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "12px",
      }}
    >
      <Grid container spacing={2}>
        {watchlist?.map((watchlistItem, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Item setIsOpenListFilm={setIsOpenListFilm} watchlistItem={watchlistItem} setWatchlistSelected={setWatchlistSelected}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WatchListContainer;

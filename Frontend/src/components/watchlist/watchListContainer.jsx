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

function Item(setIsOpenListFilm) {
  const [openMenu, setOpenMenu] = useState(false);
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
        onClick={() => setIsOpenListFilm(true)}
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
          onClick={() => setIsOpenListFilm(true)}
        >
          <Typography gutterBottom variant="h5" component="div">
            Name WatchList
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            10 videos
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

function WatchListContainer({ setIsOpenListFilm }) {
  const watchlist = [
    {
      name: "WatchList 1",
      films: [
        {
          name: "Film 1",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
        {
          name: "Film 2",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
        {
          name: "Film 3",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      name: "WatchList 2",
      films: [
        {
          name: "Film 1",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
        {
          name: "Film 2",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
        {
          name: "Film 3",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      name: "WatchList 3",
      films: [
        {
          name: "Film 1",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
        {
          name: "Film 2",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
        {
          name: "Film 3",
          duration: "120",
          img: "https://picsum.photos/200/300",
        },
      ],
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "12px",
      }}
    >
      <Grid container spacing={2}>
        {watchlist.map((watchlistItem, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Item setIsOpenListFilm={setIsOpenListFilm} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WatchListContainer;

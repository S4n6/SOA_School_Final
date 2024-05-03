import {
  Box,
  Button,
  IconButton,
  Pagination,
  TablePagination,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import AddAndEditMovie from "../../components/admin/addAndEditMovie";
import DialogDelete from "../../components/dialogDelete";
import { filterMovie } from "../../api/movie";

function createCellMovie(name, duration, img) {
  return (
    <Box
      align="left"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar variant="square" src={img} />
      <Box
        sx={{
          marginLeft: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
        <Typography>{duration}</Typography>
      </Box>
    </Box>
  );
}

function ManageMovie() {
  const [openEdit, setOpenEdit] = React.useState(false);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showDialogDelete, setShowDialogDelete] = React.useState(false);
  const [objectToDelete, setObjectToDelete] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [tvShowEdit, setTvShowEdit] = React.useState(null);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (season) => {
    setObjectToDelete(season);
    setShowDialogDelete(true)
    console.log("Delete");
  };

  React.useEffect(() => {
    filterMovie().then((res) => {
      if (res) {
        setMovies(res);
      }
    }
    );

  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <TextField id="outlined-basic" label="Search..." variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setOpenEdit(true);
          }}
        >
          Thêm phim mới
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          flexDirection: "column",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "grey.500",
                }}
              >
                <TableCell align="left">Movie</TableCell>
                <TableCell align="left">Quality</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Publish Date</TableCell>
                <TableCell align="left">Added Date</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
                {movies.map((movie) => (
                  <TableRow key={movie?.name}>
                    <TableCell>

                      {createCellMovie(movie?.name, movie?.duration, movie?.banner)}
                    </TableCell>
                    <TableCell align="left">{movie?.productionCompany}</TableCell>
                    <TableCell align="left">{movie?.genresmovie?.join(', ')}</TableCell>
                    <TableCell align="left">{movie?.firstYearRelease}</TableCell>
                    <TableCell align="left">11/04/2024</TableCell>
                    <TableCell align="left">
                      <Tooltip title="Edit Movie">
                        <IconButton
                          onClick={() => {
                            setOpenEdit(true);
                            setTvShowEdit(movie);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Movie">
                        <IconButton
                          onClick={() => handleDelete(movie)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={11}
          defaultPage={6}
          boundaryCount={2}
          sx={{
            marginTop: "2rem",
          }}
        />
      </Box>
      <AddAndEditMovie isOpen={openEdit} setIsOpen={setOpenEdit} film={tvShowEdit}/>
      {
          showDialogDelete && <DialogDelete setOpenDialog={setShowDialogDelete} objectToDelete={objectToDelete}/>
        }
    </Box>
  );
}

export default ManageMovie;

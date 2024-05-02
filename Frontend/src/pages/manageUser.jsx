import {
  Box,
  Button,
  IconButton,
  Pagination,
  TablePagination,
  TextField,
  Tooltip,
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

function ManageUser() {
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Box>
        <TextField id="outlined-basic" label="Search..." variant="outlined" />
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
                <TableCell align="left">Avatar</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Join Date</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">
                    <Avatar />
                  </TableCell>
                  <TableCell align="left">Nguyễn Hoàng Sang</TableCell>
                  <TableCell align="left">sang05112003@gmail.com</TableCell>
                  <TableCell align="left">Active</TableCell>
                  <TableCell align="left">11/04/2024</TableCell>
                  <TableCell align="left">
                    <Tooltip title="Block User">
                      <IconButton>
                        <BlockIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete User">
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination count={11} defaultPage={6} boundaryCount={2}
            sx={{
                marginTop: '2rem'
            }}
        />
      </Box>
    </Box>
  );
}

export default ManageUser;

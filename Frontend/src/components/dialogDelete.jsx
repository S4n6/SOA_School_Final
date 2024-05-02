import { Box, Button, Dialog, DialogTitle } from "@mui/material";

function DialogDelete({setOpenDialog, objectToDelete}) {
  return (
    <Dialog open={true} onClose={() => setOpenDialog(false)}>
      <DialogTitle>Bạn có chắc muốn xóa {objectToDelete} không ?</DialogTitle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
        <Button
          onClick={() => setOpenDialog(false)}
          sx={{
            backgroundColor: "red",
            color: "white",
            ":hover": {
              backgroundColor: "error.light",
            },
          }}
        >
          Delete
        </Button>
      </Box>
    </Dialog>
  );
}

export default DialogDelete;

import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

function Eposide() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];


  return (
    <Box
      sx={{
        width: "25%",
        marginRight: "1rem",
        border: "1px solid rgba(0, 0, 0, 1.0)",
        borderRadius: 5,
        padding: "1rem",
        backgroundColor: "rgba(25, 21, 56, 1.0)",
      }}
    >
      <Box
        sx={{
          width: "95%",
          padding: "1rem",
          marginRight: "1rem",
        }}
      >
        <FormControl fullWidth>
          <InputLabel 
            id="demo-simple-select-label"
          >
            Season
        </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
                color: 'rgba(255, 0, 0, 1)',
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          maxHeight: "200px",
          overflow: "auto",
          padding: "1rem",
        }}
      >
        <Stack direction="column" spacing={2}>
          <Button 
            key="one"
            sx={{
                color: 'rgba(255, 0, 0, 1)',
            }}
          >
            One
          </Button>
          <Button 
            key="one"
            sx={{
                color: 'rgba(255, 0, 0, 1)',
            }}
          >
            One
          </Button>
          <Button 
            key="one"
            sx={{
                color: 'rgba(255, 0, 0, 1)',
            }}
          >
            One
          </Button>
          <Button 
            key="one"
            sx={{
                color: 'rgba(255, 0, 0, 1)',
            }}
          >
            One
          </Button>
          <Button 
            key="one"
            sx={{
                color: 'rgba(255, 0, 0, 1)',
            }}
          >
            One
          </Button>
         
        </Stack>
      </Box>
    </Box>
  );
}

export default Eposide;

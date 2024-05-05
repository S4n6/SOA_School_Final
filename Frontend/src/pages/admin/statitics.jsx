import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CarouselComponent from "../../components/home/carousel";
import Carousel from "react-material-ui-carousel";
import SlideItem from "../../components/admin/slideItem";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";

// Hàm trả về số thống kê đơn giản
function thongkesimple(type, number, IconComponent) {
  return (
    <Paper
      sx={{
        width: "30%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        {IconComponent}
        <Typography>{type}</Typography>
      </Box>
      <Typography
        sx={{
          color: "green",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        +{number}
      </Typography>
    </Paper>
  );
}

function Statitics() {
  const trendingMovies = [
    {
      id: 1,
      title: "Movie Title 1",
      poster_path: "/path/to/movie1.jpg",
    },
    {
      id: 2,
      title: "Movie Title 2",
      poster_path: "/path/to/movie2.jpg",
    },
    {
      id: 3,
      title: "Movie Title 3",
      poster_path: "/path/to/movie3.jpg",
    },
    // ... more movies
  ];

  const [topCategory, setTopCategory] = useState([]);
  const [timeTopCategory, setTimeTopCategory] = useState("Week");
  const handleChange = (event) => {
    setTimeTopCategory(event.target.value);
  };
  useEffect(() => {
    // Gọi API lấy dữ liệu top category
    setTopCategory([
      {
        label: "Action",
        value: 10,
      },
      {
        label: "Scienfic",
        value: 15,
      },
      {
        label: "Adventure",
        value: 20,
      },
    ]);
  }, []);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "6rem",
            }}
          >
            {thongkesimple("View", "15K", <RemoveRedEyeIcon />)}
            {thongkesimple("Visitors", "53K", <GroupIcon />)}
            {thongkesimple("Vip member", "10", <AccountBalanceWalletIcon />)}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>My check</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Top Rating Film
          </Typography>
          <Carousel
            indicatorContainerProps={{
              style: {
                marginTop: "4rem",
              },
            }}
            height={"400px"}
            sx={{
              padding: "1.5rem",
            }}
          >
            {trendingMovies.map((item, i) => {
              return <SlideItem key={i} slide={item} />;
            })}
          </Carousel>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              height: "100%",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  fontWeight: "bold",

                  marginRight: "1rem",
                }}
              >
                Top Category
              </Typography>
              <FormControl
                sx={{
                  width: "20%",
                  marginLeft: '1rem',
                }}
              >
                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={timeTopCategory}
                  label="Time"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Week</MenuItem>
                  <MenuItem value={2}>Month</MenuItem>
                  <MenuItem value={3}>Year</MenuItem>
                </Select>
              </FormControl>
             
            </Box>
            <Box
                sx={{
                  width: "100%%",
                  height: "100%",
                  padding: "1rem"
                }}
              >
                <PieChart
                  series={[
                    {
                      data: topCategory,
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Statitics;

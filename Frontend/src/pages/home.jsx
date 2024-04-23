import { Box } from "@mui/system";
import CarouselComponent from "../components/home/carousel";
import GridViewMovies from "../components/movie/gridviewMovies";
import MoviesRecommend from "../components/movie/moviesRecommend";


export default function Home() {
    return (
       <Box 
        sx={
            {
                marginTop: '100px',
            }
        }
       >
            <CarouselComponent/>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        width: '75%',
                        marginRight: '3rem',
                    }}
                >
                    <GridViewMovies/>
                </Box>
                <Box
                    sx={{
                       width: '25%',
                    }}
                >
                    <MoviesRecommend/>
                </Box>
                {/* <GridViewMovies/>
                <MoviesRecommend/> */}
            </Box>
       </Box>
    );
}
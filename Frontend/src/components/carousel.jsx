import Slide from '@mui/material/Slide';
import { Box } from '@mui/system';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CarouselItem from './carouselitem';

function CarouselComponent({items}) {
const trendingMovies = [
    {
        id: 1,
        title: "Movie Title 1",
        poster_path: "/path/to/movie1.jpg"
    },
    {
        id: 2,
        title: "Movie Title 2",
        poster_path: "/path/to/movie2.jpg"
    },
    {
        id: 3,
        title: "Movie Title 3",
        poster_path: "/path/to/movie3.jpg"
    },
    // ... more movies
    ];
  return (
    <Box
        sx={
            {
                margin: '0 auto',
                maxWidth: '80vw',
            }
        }
    >
        <Carousel
            indicatorContainerProps={{
                style: {
                    marginTop: '4rem',
                }
        
            }}
            height={'400px'}
        >
            {
                trendingMovies.map( (item, i) => {
                    return (
                        <CarouselItem key={i} item={item} />
                    )
                } )
            }
        </Carousel>
    </Box>
  );
}

export default CarouselComponent;
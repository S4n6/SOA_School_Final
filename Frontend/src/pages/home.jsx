import { Box } from "@mui/system";
import CarouselComponent from "../components/home/carousel";
import GridViewMovies from "../components/movie/gridviewMovies";
import MoviesRecommend from "../components/movie/moviesRecommend";
import { useEffect, useState } from "react";
import { filterMovie } from "../api/movie";
import { Tab, Tabs } from "@mui/material";
import { getTVShows } from "../api/tvShow";


export default function Home() {
    const [typeAll, setTypeAll] = useState(0);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        if(typeAll === 0) {
            filterMovie('')
            .then((value) => {
                setFilms(value)
            })
            .catch((error) => {
                console.error(error)
            })
        }else{
            getTVShows('')
            .then((value) => {
                setFilms(value)
            })
            .catch((error) => {
                console.error(error)
            })
        }
    }, [typeAll])

    const handleChange = (event, newValue) => {
        setTypeAll(newValue);
    };

   
    return (
        <Box
            sx={
                {
                    marginTop: '100px',
                }
            }
        >
            <CarouselComponent />
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box
                    sx={{
                        width: '75%',
                        marginRight: '3rem',
                        boxShadow: '0 0 4px 0 rgba(0,0,0,0.2)',
                        borderRadius: '8px',
                    }}
                >
                     <Box>
                        <Tabs 
                            value={typeAll} 
                            onChange={handleChange} 
                            aria-label="basic tabs example"
                            sx={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Tab label="Movie" />
                            <Tab label="TV Show" />
                        </Tabs>
                        
                    </Box>
                    <GridViewMovies films={films}/>
                </Box>
                <Box
                    sx={{
                        width: '25%',
                        boxShadow: '0 0 4px 0 rgba(0,0,0,0.2)',
                        borderRadius: '8px',
                    }}
                >
                    <MoviesRecommend />
                </Box>

            </Box>
        </Box>
    );
}
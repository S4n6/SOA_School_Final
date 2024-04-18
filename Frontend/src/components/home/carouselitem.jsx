import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import StarIcon from '@mui/icons-material/Star';
import { object } from "yup";

function CarouselItem({ item }) {

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
  return (

    <Box
        sx={
            {
                width: '100%',
                height: '100%',
                display: 'flex',
                '&:hover': {
                    cursor: 'pointer',
                    // border: '2px solid blue',
                },
                justifyContent: 'center',
                borderRadius: '12px',
            }
        }
    >
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                    width: '50%',
                    position: 'relative',
                }
            }
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '8%',
                    left: '50%',
                }}
            >
                <Typography 
                    variant="h20"
                    sx={{
                        backgroundColor: 'grey',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        marginRight: '0.5rem',
                    }}
                >
                    CAM
                </Typography>
                
                <Typography 
                    variant="h30"
                    sx={{
                        padding: '0.5rem',
                        borderRadius: '50%',
                        border: '1px solid grey',
                        marginX: '0.5rem',
                        fontSize: '0.7rem',
                    }}
                >
                    R
                </Typography>
                <br/>
                <Typography 
                    variant="h5"
                    sx={{
                        marginY: '1rem',
                    }}
                >
                    Civil War
                </Typography>
            </Box>
            <Box
                sx={
                    {
                        width: '50%',
                        marginTop: '6rem',
                    }
                }
            >
                <Box
                    sx={{
                        maxHeight: '200px',
                        overflow: 'hidden', textOverflow: 'ellipsis' 
                    }}
                >
                    <Typography 
                        variant="h10"
                        sx={{
                            overflow: 'hidden', textOverflow: 'ellipsis' 
                        }}
                    >
                       
                        The American Civil War, fought from 1861 to 1865, was a conflict 
                        between the Northern states (Union) and the Southern 
                        states (Confederacy) over issues including slavery, 
                        states rights, and regional autonomy. It resulted in 
                        significant loss of life and ultimately led to the preservation of the Union and the abolition of slavery in the United States.
                    </Typography>
                </Box>
                <Box>
                    <Box
                        sx={
                            {
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '1rem',
                                marginBottom: '1rem',
                            }
                        }
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.1rem',
                            }}
                        >
                            <StarIcon
                                fontSize="small"
                            /> 
                            7.6 
                        </Box>
                        
                        , 2016, 147 min
                    </Box>
                    <Typography variant="h10" component="h4">
                        Action
                    </Typography>
                </Box>
            </Box>
        </Box>

        <Box 
            component="img"
            sx={{
                objectFit: 'scale-down',
                width: '50%', height: '100%',
                display: 'flex',
                pointerEvents: 'none',
            }}
            src="https://m.media-amazon.com/images/M/MV5BYTYyODhlODktYjUzNC00NjUyLWI1MzYtNmI0MTY3YTUxYjY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" 
        />
   
    </Box>
  );
}

export default CarouselItem;
import { Box } from "@mui/system";
import CarouselComponent from "../components/carousel";

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
       </Box>
    );
}
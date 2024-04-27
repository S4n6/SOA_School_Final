import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

function DetailMovie(){
    return (
        <Box
            sx={{
                display: 'flex',
                width: '75%',
                height: '100%',
                marginTop:'12px',
                position: 'relative',
                justifyContent: 'space-evenly'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent:'space-envenly',
                    width: '80%',
                    height: '100%',
                }}
            >
                <Box
                >
                    <Card 
                        sx={{ 
                            maxWidth: 300,
                            height: '100%',
                        }}
                    >

                        <CardMedia
                            component="img"
                            image="https://assets.codepen.io/6093409/river.jpg"
                            title="green iguana"
                            sx={{ 
                                height: '100%' 
                            }}
                        />
                    </Card>
                </Box>
                <Box
                    sx={{
                        marginLeft: '2rem',
                    }}
                >
                    <Typography variant="h5">Tên phim</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="subtitle1">HD</Typography>
                        <StarIcon fontSize="4px"/> 7.1
                    </Box>
                    <Typography variant="subtitle2">Tóm tắt phim: </Typography>
                    <Typography variant="subtitle2">Thể loại</Typography>
                    <Typography variant="subtitle2">Thời lượng</Typography>
                    <Typography variant="subtitle2">Ngày công chiếu</Typography>
                    <Typography variant="subtitle2">Đạo diễn</Typography>
                    <Typography variant="subtitle2">Diễn viên</Typography>
                    <Typography variant="subtitle2">Quốc gia</Typography>
                    <Typography variant="subtitle2">Ngôn ngữ</Typography>

                </Box>
            </Box>
            <Box
                sx={{
                    // position:'absolute',
                    // right: '2rem',
                    // padding: '1rem',
                    width: '20%',
                    height: '100%',
                }}
            >
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Typography variant="subtitle2">5/10 (120 reviews)</Typography>
            </Box>
        </Box>
    )
}

export default DetailMovie;
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function MovieRecommendItem({film}) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <CardContent >
                    <Typography
                        component="div"
                        variant="h8"
                        sx={{
                            marginBottom: '8px',
                        }}
                    >
                        {film?.name}
                    </Typography>
                    <Typography
                        color="text.secondary" component="h9"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '8px',
                        }}
                    >
                        <StarBorderIcon /> {film?.rate}
                        <FiberManualRecordIcon style={{ fontSize: 10, margin: '8' }} />
                        {film?.firstYearRelease}
                        <FiberManualRecordIcon style={{ fontSize: 10, margin: '8' }} />
                        {film?.duration} min
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                style={{ flexGrow: 1 }}
                component="img"
                sx={{ width: 130, height: 100 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Z179QxswXB2qBZkLtuMTVl_ZdH5Gx6uIbA&s"
                alt="Live from space album cover"
            />
        </Card>
    );
}

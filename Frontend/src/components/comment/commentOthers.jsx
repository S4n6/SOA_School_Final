import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';

function CommentOthers(){
    return(
        <Box
            sx={{
                display: 'flex',
                marginTop: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 'auto'
            }}
        >
            <Avatar
                sx={{ bgcolor: 'black', marginRight: '1rem' }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
            >
                B
            </Avatar>
            <Box>
                <Typography>Tên người dùng</Typography>
                <Typography variant='subtitle1'>This is a comment exmaple for test.</Typography>
                <Typography variant='subtitle2'>11 minutes ago</Typography>
            </Box>
        </Box>
    )
}

export default CommentOthers;
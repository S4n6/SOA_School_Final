import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { Timer, Time, TimerOptions } from 'timer-node';
import timer from '../../utils/timer';

function CommentOthers({ comment }) {
    const time = timer(comment)
    return (
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
                <Typography>{comment?.user?.name}</Typography>
                <Typography variant='subtitle1'>{comment?.content}</Typography>
                <Typography variant='subtitle2'>{time} ago</Typography>
            </Box>
        </Box>
    )
}

export default CommentOthers;
import { Typography, TextField, List, ListItem, Button } from "@mui/material";
import { Box } from "@mui/system";
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import CommentOthers from "./commentOthers";

function Comment(props) {
    const comments = [
        { author: 'User1', text: 'This is a comment.' },
        { author: 'User2', text: 'This is another comment.' },
        // Add more comments as needed...
    ];
    return (
       <Box
        sx={{
            marginTop: '3rem',
            alignSelf:'flex-start',
            width: '100%',
            height: '100%',
        }}
       >
            <Typography>Comment</Typography>
            <Typography>1 Comment</Typography>
            <Divider/>
            <Box
                sx={{
                    display: 'flex',
                    marginTop: '1rem',
                }}
            >
                <Avatar
                    sx={{ bgcolor: 'black', marginRight: '1rem', marginTop: '1rem' }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    B
                </Avatar>
                <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Write a comment..."
                    sx={{ width: '100%', mt: 2 }}
                />
                <Button>Bình luận</Button>
            </Box>
            <Box
                 sx={{
                    maxHeight: '200px', // Adjust this value to change the maximum height of the list
                    overflow: 'auto',
                  }}
            >
                <List>
                    {comments.map((comment, index) => (
                        <ListItem key={index}>
                            <CommentOthers/>
                        </ListItem>
                    ))}
                </List>
            </Box>
       </Box>
    )
}

export default Comment;
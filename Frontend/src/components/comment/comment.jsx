import { Typography, TextField, List, ListItem, Button } from "@mui/material";
import { Box } from "@mui/system";
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import CommentOthers from "./commentOthers";
import { useEffect, useState } from "react";
import { getComments } from "../../api/getComments";
import useWebSocket from "react-use-websocket";

function Comment(props) {

    const [postedComment, setPostedComment] = useState("")
    const { sendMessage, lastMessage } = useWebSocket("ws://localhost:8080/api/v1/comment");

    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments("66200673fc13ae7cc6a242a2", 0, 5)
        .then((value) => {
            setComments(value || [])
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    useEffect(() => {
        if(lastMessage !== null){
            setComments((prev) => prev.concat([JSON.parse(lastMessage.data)]))
        }
    }, [lastMessage])

    const handleTextChange = (e) => {
        setPostedComment(e.target.value)
    }

    const handleClickSendComment = () => {
        const message = {
            user: {
                id: "66200673fc13ae7cc6a242a1",
                name: "Neymar",
                email: "neymar@gmail.com"
            },
            filmID: "66200673fc13ae7cc6a242a2",
            content: postedComment,
            action: "add"
        }
        sendMessage(JSON.stringify(message))
    }

    return (
        <Box
            sx={{
                marginTop: '3rem',
                alignSelf: 'flex-start',
                width: '100%',
                height: '100%',
            }}
        >
            <Typography>Comment</Typography>
            <Typography>{comments.length} comments</Typography>
            <Divider />
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
                    onChange={handleTextChange}
                    sx={{ width: '100%', mt: 2 }}
                />
                <Button onClick={handleClickSendComment}>Bình luận</Button>
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
                            <CommentOthers comment={comment} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default Comment;
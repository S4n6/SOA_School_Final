import { Typography, TextField, List, ListItem, Button, Collapse, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import CommentOthers from "./commentOthers";
import { useEffect, useState } from "react";
import { getComments } from "../../api/getComments";
import useWebSocket, { ReadyState } from "react-use-websocket";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

import StarBorder from '@mui/icons-material/StarBorder';

function renderComment(comment, index) {
    return (
        <ListItem key={index}>
            <CommentOthers comment={comment} />
        </ListItem>
    );
}

function Comment(props) {

    const [postedComment, setPostedComment] = useState("")
    const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/api/v1/websocket-comment", { share: true });
    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

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
        if (lastMessage !== null) {
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
                marginTop: "3rem",
                alignSelf: "flex-start",
                width: "100%",
                height: "50rem",
            }}
        >
            <Typography
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <InsertCommentIcon />
                Comment
            </Typography>
            <Typography
                sx={{
                    fontWeight: "bold",
                }}
            >
                {comments.length} Comment
            </Typography>
            <Divider />
            <Box
                sx={{
                    display: "flex",
                    marginTop: "1rem",
                }}
            >
                <Avatar
                    sx={{ bgcolor: "black", marginRight: "1rem", marginTop: "1rem" }}
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
                    sx={{ width: "100%", mt: 2 }}
                    onChange={handleTextChange}
                    disabled={readyState !== ReadyState.OPEN}
                />
                <Button onClick={handleClickSendComment}>Bình luận</Button>
            </Box>
            <Box
                sx={{
                    maxHeight: "60%", // Adjust this value to change the maximum height of the list
                    overflow: "auto",
                }}
            >
                <List>
                    {comments.map((comment, index) => {

                        if (comment.repliedComments && comment.repliedComments.length > 0) {
                            return (
                                <ListItem key={index}>
                                    <List>
                                        <ListItem
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                padding: "1rem",
                                                marginTop: "1rem",
                                            }}
                                        >
                                            {renderComment(comment, index)}
                                            <Box
                                                sx={{
                                                    marginLeft: "2rem",
                                                    maxHeight: "50rem",
                                                    overflow: "auto",
                                                }}
                                            >
                                                {comment.repliedComments.map((reply, index) => {
                                                    return renderComment(reply, index);
                                                })}
                                            </Box>
                                        </ListItem>
                                    </List>
                                </ListItem>
                            );
                        } else {
                            return renderComment(comment, index);
                        }
                    })}
                </List>
            </Box>
        </Box>
    );
}

export default Comment;

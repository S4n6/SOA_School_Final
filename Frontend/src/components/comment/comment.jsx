import { Typography, TextField, List, ListItem, Button, Collapse, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import CommentOthers from "./commentOthers";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

import StarBorder from '@mui/icons-material/StarBorder';

function renderComment(comment, index) {
    return (
        <ListItem key={index}>
            <CommentOthers comment={comment} />
        </ListItem>
    );
}

function renderCommentReply(comment, index) {
    if(comment.reply) {
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
                            {comment.reply.map((reply, index) => {
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
}

function Comment(props) {
  const comments = [
    {
      author: "Userghkghj",
      text: "This is a comment.",
      reply: [
        { author: "User123123", text: "This is another comment." },
        { author: "User34634", text: "This is a comment." },
        { author: "User5684567", text: "This is another comment." },
        {
          author: "User145096",
          text: "This is a comment.",
        },
      ],
    },
    { author: "User2", text: "This is another comment." },
    { author: "User1", text: "This is a comment." },
    { author: "User2", text: "This is another comment." },
    { author: "User1", text: "This is a comment." },
    { author: "User2", text: "This is another comment." },
    // Add more comments as needed...
  ];
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
        1 Comment
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
        />
        <Button>Bình luận</Button>
      </Box>
      <Box
        sx={{
          maxHeight: "60%", // Adjust this value to change the maximum height of the list
          overflow: "auto",
        }}
      >
        <List>
          {comments.map((comment, index) => {
            return renderCommentReply(comment, index);
          })}
        </List>
      </Box>
    </Box>
  );
}

export default Comment;

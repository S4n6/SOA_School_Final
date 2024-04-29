import { Button, TextField, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { Timer, Time, TimerOptions } from 'timer-node';
import timer from '../../utils/timer';
import { useEffect, useRef, useState } from 'react';
import ReplyIcon from '@mui/icons-material/Reply';


function CommentOthers({comment}) {
  const [showChat, setShowChat] = useState(false);

  const boxRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setShowChat(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "1rem",
        // justifyContent: "center",
        // alignItems: "center",
        marginRight: "auto",
        flexDirection: "column",
        width: "100%",
      }}
      ref={boxRef}
    >
      <Box
        sx={{
            display: "flex",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "auto",
          }}
      >
        <Avatar
          sx={{ bgcolor: "black", marginRight: "1rem" }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <Box>
          <Typography>{comment?.author}</Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            This is a comment exmaple for test.
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            gap={2}
          >
            11 minutes ago
            <ReplyIcon onClick={() => setShowChat(!showChat)} />
          </Typography>
        </Box>
      </Box>

      {showChat && (
        <Box
          sx={{
            display: "flex",
            marginTop: "1rem",
            marginLeft: "2rem",
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
      )}
    </Box>
  );
}

export default CommentOthers;

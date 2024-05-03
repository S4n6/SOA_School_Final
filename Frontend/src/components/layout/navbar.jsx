import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./toggleColorMode";
import { URL_LOGO } from "../../utils/contants";
import { border } from "@mui/system";
import SimpleBackdrop from "./backdrop";
import SignIn from "../../pages/signIn";
import BasicModal from "./modal";
import {
    ButtonGroup,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import Search from "../search";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { getNotifications } from "../../api/notification";
import useWebSocket from "react-use-websocket";
>>>>>>> 987acdae2e2d687e86fc6ac83fe0da4d5bc0a511

const logoStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
};

function Header({ mode, toggleColorMode }) {
<<<<<<< HEAD
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [genre, setGenre] = React.useState([]);
  const [showGenre, setShowGenre] = React.useState(false);
  const [country, setCountry] = React.useState([]);
  const [showNotification, setShowNotification] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();
  const openMenuAccount = Boolean(anchorEl);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
=======
    const [open, setOpen] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [genre, setGenre] = React.useState([]);
    const [showGenre, setShowGenre] = React.useState(false);
    const [country, setCountry] = React.useState([]);
    const [showNotification, setShowNotification] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenuAccount = Boolean(anchorEl);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
>>>>>>> 987acdae2e2d687e86fc6ac83fe0da4d5bc0a511

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: "smooth" });
            window.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });
            setOpen(false);
        }
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

<<<<<<< HEAD
  

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  React.useEffect(() => {
    setGenre([
      "Action",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film-Noir",
      "History",
      "Horror",
      "Music",
      "Musical",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Superhero",
      "Thriller",
      "War",
      "Western",
    ]);
  }, []);
=======
    React.useEffect(() => {
        setGenre([
            "Action",
            "Adventure",
            "Animation",
            "Biography",
            "Comedy",
            "Crime",
            "Documentary",
            "Drama",
            "Family",
            "Fantasy",
            "Film-Noir",
            "History",
            "Horror",
            "Music",
            "Musical",
            "Mystery",
            "Romance",
            "Sci-Fi",
            "Short",
            "Sport",
            "Superhero",
            "Thriller",
            "War",
            "Western",
        ]);
    }, []);
>>>>>>> 987acdae2e2d687e86fc6ac83fe0da4d5bc0a511

    const [notifications, setNotifications] = React.useState([])

    const [filmNotification, setFilmNotification] = React.useState([])
    const [accountNotification, setAccountNotification] = React.useState([])
    const [commentNotification, setCommentNotification] = React.useState([])

    React.useEffect(() => {
        getNotifications({ userID: "66200673fc13ae7cc6a242a1", page: 0, size: 12 })
            .then((value) => {
                setFilmNotification(value.film_notification)
                setAccountNotification(value.account_notification)
                setCommentNotification(value.comment_notification)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

// Init 3 websocket for film-notification, account-notification, comment-notification
    const { sendMessage: sendFilmMessage, 
        lastMessage: lastFilmMessage 
    } = useWebSocket('ws://localhost:8080/api/v1/film-notification', { share: true })
    const { sendMessage: sendAccountMessage, 
        lastMessage: lastAccountMessage 
    } = useWebSocket('ws://localhost:8080/api/v1/account-notification', { share: true })
    const { sendMessage: sendCommentMessage, 
        lastMessage: lastCommentMessage 
    } = useWebSocket('ws://localhost:8080/api/v1/comment-notification', { share: true })

    React.useEffect(() => {
        if(lastFilmMessage != null){
            setFilmNotification(prev => prev.concat([JSON.parse(lastFilmMessage.data)]))
        }
    }, [lastFilmMessage])
    
    React.useEffect(() => {
        if(lastAccountMessage != null){
            setAccountNotification(prev => prev.concat([JSON.parse(lastAccountMessage.data)]))
        }
    }, [lastAccountMessage])
    
    React.useEffect(() => {
        if(lastCommentMessage != null){
            setCommentNotification(prev => prev.concat([JSON.parse(lastCommentMessage.data)]))
        }
    }, [lastCommentMessage])

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: "transparent",
                    backgroundImage: "none",
                    mt: 2,
                    width: "100%",
                }}
            >
<<<<<<< HEAD
              <img
                src={URL_LOGO}
                style={{
                  ...logoStyle,
                  width: "60px",
                  height: "60px",
                  // border: "2px solid black",
                  borderRadius: "50%",
                  hover: {
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  },
                }}
                alt="Home"
                onClick={() => navigate("/home")}
              />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  marginLeft: "1rem",
                }}
              >
                <MenuItem
                  onClick={() => navigate("/Movie")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="button" color="text.primary">
                    Movie
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/TVSeries")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="button" color="text.primary">
                    TV Series
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("testimonials")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Box>
                    <Box
                      sx={{
                        position: "relative",
                        color: "primary.main",
                      }}
                      onClick={() => setShowGenre(!showGenre)}
                    >
                      GENRE
                    </Box>
                    {showGenre && (
                      <Box
                        sx={{
                          position: "absolute",
                          width: "32rem",
                          height: "12rem",
                          top: "4rem",
                          backgroundColor: "white",
                          borderRadius: "8px",
                          overflow: "auto",
                          padding: "4px",
                          boxShadow: 3,
                        }}
                      >
                        <Grid container spacing={1.5}>
                          {genre?.map((item, index) => {
                            return (
                              <Grid
                                item
                                xs={3}
                                sm={3}
                                md={3}
                                lg={3}
                                key={index}
                              >
                                <Button>{item}</Button>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    )}
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("testimonials")}
                  sx={{ py: "6px", px: "12px" }}
                >
                  <Typography variant="button" color="text.primary">
                    Country
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            {/* END Thanh NavBar bên trái */}

            {/* Thanh NavBar bên phải */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <TextField
                  id="filled-textarea"
                  placeholder="TV Series, Movies, ..."
                  multiline
                  variant="filled"
                  value={search}
                  onChange={handleSearchChange}
                  InputProps={{
                    style: {
                      backgroundColor: "transparent",
                      fontSize: "0.8rem",
                    },
                    startAdornment: (
                      <InputAdornment>
                        <IconButton onClick={() => navigate('/all?name='+search)}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    maxWidth: 400,
                    color: "white",
                    marginBottom: '16px',
                  }}
                />
              </Box>

              {/* Notification */}
              <Box>
                <IconButton
                  sx={{
                    // backgroundColor: "transparent",
                    hover: {
                      backgroundColor: "rgba(255, 255, 255, 0.5)",
                      cursor: "pointer",
                    },
                    borderRadius: 12,
                  }}
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <NotificationsIcon />
                </IconButton>
=======
                <Container maxWidth="false">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexShrink: 0,
                            borderRadius: "999px",
                            bgcolor:
                                theme.palette.mode === "light"
                                    ? "rgba(255, 255, 255, 0.4)"
                                    : "rgba(0, 0, 0, 0.4)",
                            backdropFilter: "blur(24px)",
                            maxHeight: 40,
                            border: "1px solid",
                            borderColor: "divider",
                            boxShadow:
                                theme.palette.mode === "light"
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
                        })}
                    >
                        {/* Thanh NavBar bên trái */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                ml: "-18px",
                                px: 0,
                                padding: 1,
                            }}
                        >
                            <img
                                src={URL_LOGO}
                                style={{
                                    ...logoStyle,
                                    width: "60px",
                                    height: "60px",
                                    // border: "2px solid black",
                                    borderRadius: "50%",
                                    hover: {
                                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                                    },
                                }}
                                alt="Home"
                            />
                            <Box
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    marginLeft: "1rem",
                                }}
                            >
                                <MenuItem
                                    onClick={() => scrollToSection("features")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="button" color="text.primary">
                                        Movie
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("testimonials")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="button" color="text.primary">
                                        TV Series
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("testimonials")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Box>
                                        <Box
                                            sx={{
                                                position: "relative",
                                                color: "primary.main",
                                            }}
                                            onClick={() => setShowGenre(!showGenre)}
                                        >
                                            GENRE
                                        </Box>
                                        {showGenre && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    width: "32rem",
                                                    height: "12rem",
                                                    top: "4rem",
                                                    backgroundColor: "white",
                                                    borderRadius: "8px",
                                                    overflow: "auto",
                                                    padding: "4px",
                                                    boxShadow: 3,
                                                }}
                                            >
                                                <Grid container spacing={1.5}>
                                                    {genre?.map((item, index) => {
                                                        return (
                                                            <Grid
                                                                item
                                                                xs={3}
                                                                sm={3}
                                                                md={3}
                                                                lg={3}
                                                                key={index}
                                                            >
                                                                <Button>{item}</Button>
                                                            </Grid>
                                                        );
                                                    })}
                                                </Grid>
                                            </Box>
                                        )}
                                    </Box>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection("testimonials")}
                                    sx={{ py: "6px", px: "12px" }}
                                >
                                    <Typography variant="button" color="text.primary">
                                        Country
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        {/* END Thanh NavBar bên trái */}
                        {/* Thanh NavBar bên phải */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 1,
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                <TextField
                                    id="filled-textarea"
                                    placeholder="TV Series, Movies, ..."
                                    multiline
                                    variant="filled"
                                    InputProps={{
                                        style: {
                                            backgroundColor: "transparent",
                                            fontSize: "0.8rem",
                                        },
                                        startAdornment: (
                                            <InputAdornment>
                                                <IconButton onClick={() => console.log("Icon clicked")}>
                                                    <SearchIcon style={{}} />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        maxWidth: 400,
                                        color: "white",
                                        marginBottom: '16px',
                                    }}
                                />
                            </Box>

                            {/* Notification */}
                            <Box>
                                <IconButton
                                    sx={{
                                        backgroundColor: "transparent",
                                        hover: {
                                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                                            cursor: "pointer",
                                        },
                                        borderRadius: 12,
                                    }}
                                    onClick={() => setShowNotification(!showNotification)}
                                >
                                    <NotificationsIcon />
                                </IconButton>
>>>>>>> 987acdae2e2d687e86fc6ac83fe0da4d5bc0a511

                                {showNotification && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "20rem",
                                            height: "12rem",
                                            top: "4rem",
                                            right: "0",
                                            borderRadius: "8px",
                                            overflow: "auto",
                                            padding: "4px",
                                            boxShadow: 3,
                                        }}
                                    >
                                        <List>
                                            {filmNotification.map((notification, index) => {
                                                return <ListItemButton key={index}>
                                                    <Typography variant="h6" color="text.primary">
                                                        {notification.title}
                                                    </Typography>
                                                </ListItemButton>
                                            })}
                                            {accountNotification.map((notification, index) => {
                                                return <ListItemButton key={index}>
                                                    <Typography variant="h6" color="text.primary">
                                                        {notification.title}
                                                    </Typography>
                                                </ListItemButton>
                                            })}
                                            {commentNotification.map((notification, index) => {
                                                return <ListItemButton key={index}>
                                                    <Typography variant="h6" color="text.primary">
                                                        {notification.title}
                                                    </Typography>
                                                </ListItemButton>
                                            })}
                                        </List>
                                    </Box>
                                )}
                            </Box>
                            {/* END Notification */}
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />

                            {/* Menu Account */}
                            <IconButton
                                sx={{
                                    backgroundColor: "transparent",
                                    hover: {
                                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                                        cursor: "pointer",
                                    },
                                    borderRadius: 12,
                                }}
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                open={openMenuAccount}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                <MenuItem>
                                    <Button
                                        color="primary"
                                        variant="text"
                                        size="small"
                                        component="a"
                                        target="_blank"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                        }}
                                    >
                                        Sign in
                                    </Button>
                                </MenuItem>

                                <MenuItem>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="small"
                                        component="a"
                                        href="/material-ui/getting-started/templates/sign-up/"
                                        target="_blank"
                                    >
                                        Sign up
                                    </Button>
                                </MenuItem>
                            </Menu>
                            {/* END Menu Account */}
                        </Box>
                        {/* END Thanh NavBar bên phải */}

                        {/* Chuyển thành menu dạng mobile */}
                        <Box sx={{ display: { sm: "", md: "none" } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: "30px", p: "4px" }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: "60dvw",
                                        p: 2,
                                        backgroundColor: "background.paper",
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "end",
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ToggleColorMode
                                            mode={mode}
                                            toggleColorMode={toggleColorMode}
                                        />
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection("features")}>
                                        Features
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("testimonials")}>
                                        Testimonials
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("highlights")}>
                                        Highlights
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("pricing")}>
                                        Pricing
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection("faq")}>
                                        FAQ
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="a"
                                            href="/material-ui/getting-started/templates/sign-up/"
                                            target="_blank"
                                            sx={{ width: "100%" }}
                                        >
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            component="a"
                                            href="/material-ui/getting-started/templates/sign-in/"
                                            target="_blank"
                                            sx={{ width: "100%" }}
                                        >
                                            Sign in
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                        {/* END Chuyển thành menu dạng mobile */}
                    </Toolbar>
                </Container>
            </AppBar>

            <BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
                <SignIn />
            </BasicModal>
        </div>
    );
}

Header.propTypes = {
    mode: PropTypes.oneOf(["dark", "light"]).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default Header;

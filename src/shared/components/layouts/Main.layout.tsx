import {
    AppBar,
    Button,
    Box,
    Toolbar,
    Typography,
    Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainLayout: React.FC = ({ children }) => {
    const navigate = useNavigate();
    const isMobileScreen = useMediaQuery("(max-width:575px)");

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                height: "100vh",
            }}
        >
            <AppBar
                sx={{ backgroundColor: "white" }}
                color="transparent"
                position="relative"
            >
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <img
                            height={60}
                            src="/shelteruktranians_original2.svg"
                            alt="logo"
                            style={{ margin: "5px", cursor: "pointer" }}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, cursor: "pointer" }}
                        >
                            Shelter Ukrainians
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={isMobileScreen ? "column" : "row"}
                    >
                        <Button
                            onClick={() => {
                                navigate("search-shelter");
                            }}
                            sx={{ margin: "5px", minWidth: "95px" }}
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="error"
                        >
                            Shelter
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("add-shelter");
                            }}
                            startIcon={<AddIcon />}
                            variant="contained"
                            color="success"
                            sx={{ margin: "5px", minWidth: "95px" }}
                        >
                            Shelter
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container className="shelter-main-container" fixed>
                {children}
            </Container>
        </Box>
    );
};

export default MainLayout;

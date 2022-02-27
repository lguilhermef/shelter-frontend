import {
    AppBar,
    Button,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppBarTitle: React.FC = ({ children }) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/");
    };

    return (
        <Typography
            onClick={onClickHandler}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
        >
            {children}
        </Typography>
    );
};

const MainLayout: React.FC = ({ children }) => {
    const navigate = useNavigate();

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
                <Container>
                    <Toolbar>
                        <img
                            height={60}
                            src="/shelteruktranians_original2.svg"
                            alt="logo"
                            style={{ marginRight: "10px", cursor: "pointer" }}
                            onClick={() => {
                                navigate("");
                            }}
                        />
                        <AppBarTitle>Shelter Ukrainians</AppBarTitle>
                        <Button
                            onClick={() => {
                                navigate("search-shelter");
                            }}
                            sx={{ marginRight: "10px" }}
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="error"
                        >
                            Search Shelter
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("add-shelter");
                            }}
                            startIcon={<AddIcon />}
                            variant="contained"
                            color="success"
                        >
                            Add Shelter
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container className="shelter-main-container" fixed>
                {children}
            </Container>
        </Box>
    );
};

export default MainLayout;

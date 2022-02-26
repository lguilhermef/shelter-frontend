import { AppBar, Button, Box, IconButton, Toolbar, Typography, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AppBarTitle: React.FC = ({ children }) => <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{children}</Typography>;

const AppBarMenuButton: React.FC = () => {
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton >
    );
};

const MainLayout: React.FC = ({children}) => {

    const navigate = useNavigate();
    return (
        <Box>
            <AppBar color="transparent" position="relative">
                <Container>
                    <Toolbar>
                        {/* <AppBarMenuButton /> */}
                        <AppBarTitle>ShelterUkranians</AppBarTitle>
                        <Button onClick={ () => { navigate("search-shelter"); }}
                            sx={{ marginRight: "10px"}}
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="error">
                            Search Shelter
                        </Button>
                        <Button onClick={ () => { navigate("add-shelter"); }}
                            startIcon={<AddIcon />}
                            variant="contained"
                            color="success">
                            Add Shelter
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container fixed>
                {/* <Outlet /> */}
                {children}
            </Container>
        </Box>
    );
};

export default MainLayout;
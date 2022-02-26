import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ShelterPage from "../shared/components/partials/ShelterPage.partial";

const MainPage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <ShelterPage>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item sm={6}>
                    <Box>
                        <Button onClick={() => { navigate("search-shelter"); }}
                            sx={{ marginRight: "10px" }}
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="error">
                            Search Shelter
                        </Button>

                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box>
                        <Button onClick={() => { navigate("add-shelter"); }}
                            startIcon={<AddIcon />}
                            variant="contained"
                            color="success">
                            Add Shelter
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </ShelterPage>
    );
};

export default MainPage;
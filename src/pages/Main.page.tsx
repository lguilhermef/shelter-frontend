import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ShelterPage from "../shared/components/partials/ShelterPage.partial";

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <ShelterPage>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item sm={6}>
                    <Box>
                        <Button
                            onClick={() => {
                                navigate("search-shelter");
                            }}
                            sx={{ marginRight: "10px", marginBottom: "10px" }}
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="error"
                        >
                            Search Shelter
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("search-shelter");
                            }}
                            sx={{ marginRight: "10px", marginBottom: "10px" }}
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="error"
                        >
                            Пошук притулку
                        </Button>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box>
                        <Button
                            onClick={() => {
                                navigate("add-shelter");
                            }}
                            startIcon={<AddIcon />}
                            variant="contained"
                            sx={{ marginRight: "10px", marginBottom: "10px" }}
                            color="success"
                        >
                            Add Shelter
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("add-shelter");
                            }}
                            startIcon={<AddIcon />}
                            variant="contained"
                            sx={{ marginRight: "10px", marginBottom: "10px" }}
                            color="success"
                        >
                            Додати укриття
                        </Button>
                    </Box>
                </Grid>

                <Grid item sm={12}>
                    <Box>
                        <Typography paragraph>
                            Are you a woman with children? We can pay a room in
                            hotel for you. Click on the button to proceed
                        </Typography>
                        <br />
                        <Button
                            href="https://forms.gle/5ZaTVLhPMXij47VS8"
                            variant="contained"
                            color="warning"
                            size="large"
                        >
                            CONTACT US
                        </Button>
                        <br />
                        <Typography
                            paragraph
                            sx={{ display: "flex", alignItems: "center" }}
                            component="div"
                        >
                            <strong>
                                Use this option if no shelter is available
                            </strong>
                            <div className="shelter-svg-image">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 36 36"
                                >
                                    <path
                                        fill="#FFCC4D"
                                        d="M2.653 35C.811 35-.001 33.662.847 32.027L16.456 1.972c.849-1.635 2.238-1.635 3.087 0l15.609 30.056c.85 1.634.037 2.972-1.805 2.972H2.653z"
                                    />
                                    <path
                                        fill="#231F20"
                                        d="M15.583 28.953c0-1.333 1.085-2.418 2.419-2.418 1.333 0 2.418 1.085 2.418 2.418 0 1.334-1.086 2.419-2.418 2.419-1.334 0-2.419-1.085-2.419-2.419zm.186-18.293c0-1.302.961-2.108 2.232-2.108 1.241 0 2.233.837 2.233 2.108v11.938c0 1.271-.992 2.108-2.233 2.108-1.271 0-2.232-.807-2.232-2.108V10.66z"
                                    />
                                </svg>
                            </div>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </ShelterPage>
    );
};

export default MainPage;

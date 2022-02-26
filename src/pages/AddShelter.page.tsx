import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShelterPageDescription from "../shared/components/atoms/ShelterPageDescription.atom";
import ShelterPageTitle from "../shared/components/atoms/ShelterPageTitle.atom";
import ShelterPage from "../shared/components/partials/ShelterPage.partial";
import AddIcon from "@mui/icons-material/Add";

const FormSectionTitle: React.FC = ({ children = null }) => (
    <Typography variant="h4" gutterBottom>
        {children}
    </Typography>
);
const FormSectionDescription: React.FC = ({ children = null }) => (
    <Typography paragraph>{children}</Typography>
);

const AddShelter: React.FC = () => {
    const navigate = useNavigate();
    const [shelter, setShelter] = useState({
        city: "",
        country: "",
        contact: {
            type: "",
            number: "",
        },
        petFriendly: false,
        numberOfBeds: 0,
        securityCode: 0,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {};

    const handleSubmit = () => {};

    return (
        <ShelterPage>
            <Grid container direction="column">
                <Grid item>
                    <ShelterPageTitle>Add a Shelter</ShelterPageTitle>
                    <ShelterPageDescription>
                        Compile here all the fields to insert Shelter.
                    </ShelterPageDescription>
                </Grid>

                <Grid item>
                    <FormSectionTitle>Location</FormSectionTitle>
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            required
                            label="City"
                            variant="standard"
                            margin="normal"
                            value={shelter.city}
                            name="city"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            required
                            label="Country"
                            variant="standard"
                            margin="normal"
                            value={shelter.country}
                        />
                    </Grid>
                </Grid>
                <br />
                <Grid item>
                    <FormSectionTitle>Host Space</FormSectionTitle>
                    <TextField
                        fullWidth
                        required
                        type="number"
                        label="Number of Beds"
                        variant="standard"
                        margin="normal"
                        value={shelter.numberOfBeds}
                    />
                </Grid>
                <br />
                <Grid item>
                    <FormSectionTitle>Contacts</FormSectionTitle>
                    <FormSectionDescription>
                        Add at least one of the contact to be available
                    </FormSectionDescription>
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            label="WhatsApp"
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            label="Viber"
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField
                            fullWidth
                            label="Telegram"
                            variant="standard"
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <br />
                <Grid item>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Accept animals"
                            value={shelter.petFriendly}
                        />
                    </FormGroup>
                </Grid>
                <br />
                <Grid item>
                    <FormSectionTitle>Generals</FormSectionTitle>
                    <FormSectionDescription>
                        Insert 4 digits if you want to edit this data after you
                        submit it (ex: delete shelter after occupied)
                    </FormSectionDescription>
                    <TextField
                        fullWidth
                        required
                        type="number"
                        placeholder="0000"
                        label="SecurityCode"
                        variant="standard"
                        margin="normal"
                        value={shelter.securityCode}
                    />
                </Grid>
                <br />
                <br />
                <Button
                    onClick={handleSubmit}
                    startIcon={<AddIcon />}
                    variant="contained"
                    color="success"
                    style={{ marginBottom: "1em" }}
                >
                    Add Shelter
                </Button>
            </Grid>
        </ShelterPage>
    );
};

export default AddShelter;

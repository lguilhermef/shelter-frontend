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
import React from "react";
import { useNavigate } from "react-router-dom";
import ShelterPageDescription from "../shared/components/atoms/ShelterPageDescription.atom";
import ShelterPageTitle from "../shared/components/atoms/ShelterPageTitle.atom";
import ShelterPage from "../shared/components/partials/ShelterPage.partial";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import ContactEnum from "../shared/enums/Contact.enum";

const FormSectionTitle: React.FC = ({ children = null }) => (
    <Typography variant="h4" gutterBottom>
        {children}
    </Typography>
);
const FormSectionDescription: React.FC = ({ children = null }) => (
    <Typography paragraph>{children}</Typography>
);

type NewShelter = {
    country: string;
    city: string;
    contact: {
        number: string;
        contactType: string;
    };
    numberOfBeds: number;
    securityCode: number;
    petFriendly: boolean;
};

const AddShelter: React.FC = () => {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm<NewShelter>({
        defaultValues: {
            country: "",
            city: "",
            contact: {
                number: "",
                contactType: "",
            },
            numberOfBeds: 0,
            securityCode: 0,
            petFriendly: false,
        },
    });

    const onSubmit = (data: NewShelter) => {
        console.log(data);

        axios.post(
            "https://ukraineshelter-app.azurewebsites.net/shelter/add",
            data
        );
    };

    return (
        <ShelterPage>
            <Grid container direction="column">
                <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                    <Grid item>
                        <ShelterPageTitle>Add a Shelter</ShelterPageTitle>
                        <ShelterPageDescription>
                            Compile here all the fields to insert Shelter.
                        </ShelterPageDescription>
                    </Grid>

                    <Grid item>
                        <FormSectionTitle>Location</FormSectionTitle>
                        <Grid item sm={12}>
                            <Controller
                                control={control}
                                name="city"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        required
                                        label="City"
                                        variant="standard"
                                        margin="normal"
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Controller
                                control={control}
                                name="country"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        required
                                        label="Country"
                                        variant="standard"
                                        margin="normal"
                                        {...field}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid item>
                        <FormSectionTitle>Host Space</FormSectionTitle>
                        <Controller
                            control={control}
                            name="numberOfBeds"
                            render={({ field }) => (
                                <TextField
                                    fullWidth
                                    required
                                    type="number"
                                    label="Number of Beds"
                                    variant="standard"
                                    margin="normal"
                                    {...field}
                                />
                            )}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <FormSectionTitle>Contacts</FormSectionTitle>
                        <FormSectionDescription>
                            Add at least one of the contact to be available
                        </FormSectionDescription>
                        <FormControl fullWidth>
                            <InputLabel>Contact Type</InputLabel>
                            <Controller
                                control={control}
                                name="contact.contactType"
                                render={({ field }) => (
                                    <Select
                                        labelId="contactType"
                                        label="Contact Type"
                                        {...field}
                                    >
                                        {Object.values(ContactEnum).map(
                                            (contact) => (
                                                <MenuItem value={contact}>
                                                    {contact}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                )}
                            />
                            <Controller
                                control={control}
                                name="contact.number"
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        required
                                        type="text"
                                        label="Number"
                                        variant="standard"
                                        margin="normal"
                                        {...field}
                                    />
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <br />
                    <Grid item>
                        <FormGroup>
                            <Controller
                                control={control}
                                name="petFriendly"
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Accept animals"
                                        {...field}
                                    />
                                )}
                            />
                        </FormGroup>
                    </Grid>
                    <br />
                    <Grid item>
                        <FormSectionTitle>Generals</FormSectionTitle>
                        <FormSectionDescription>
                            Insert 4 digits if you want to edit this data after
                            you submit it (ex: delete shelter after occupied)
                        </FormSectionDescription>
                        <Controller
                            control={control}
                            name="securityCode"
                            render={({ field }) => (
                                <TextField
                                    fullWidth
                                    required
                                    type="number"
                                    placeholder="0000"
                                    label="SecurityCode"
                                    variant="standard"
                                    margin="normal"
                                    {...field}
                                />
                            )}
                        />
                    </Grid>
                    <br />
                    <br />
                    <Button
                        startIcon={<AddIcon />}
                        variant="contained"
                        color="success"
                        style={{ marginBottom: "1em" }}
                        type="submit"
                    >
                        Add Shelter
                    </Button>
                </form>
            </Grid>
        </ShelterPage>
    );
};

export default AddShelter;

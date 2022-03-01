import {
    Alert,
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import { NewShelter } from "../../../pages/AddShelter.page";
import ContactEnum from "../../enums/Contact.enum";
import ShelterPageDescription from "../atoms/ShelterPageDescription.atom";
import ShelterPageTitle from "../atoms/ShelterPageTitle.atom";

const FormSectionTitle: React.FC = ({ children = null }) => (
    <Typography variant="h4" gutterBottom>
        {children}
    </Typography>
);

const FormSectionDescription: React.FC = ({ children = null }) => (
    <Typography paragraph margin="32px 0 16px 0">
        {children}
    </Typography>
);

interface ShelterFormProps {
    onSubmit: any;
    error: boolean;
    contactTypes: ContactEnum[];
}

const ShelterForm = ({ onSubmit, error, contactTypes }: ShelterFormProps) => {
    const { control, handleSubmit } = useForm<NewShelter>();

    return (
        <form action="submit" onSubmit={handleSubmit(onSubmit)}>
            <Grid item>
                <ShelterPageTitle>Add a Shelter</ShelterPageTitle>
                <ShelterPageDescription>
                    Compile here all the fields to insert Shelter.
                </ShelterPageDescription>
            </Grid>

            <Paper elevation={3}>
                <Box sx={{ margin: "8px", padding: "32px" }}>
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
                                defaultValue={contactTypes[0]}
                                render={({ field }) => (
                                    <Select
                                        labelId="contactType"
                                        label="Contact Type"
                                        {...field}
                                    >
                                        {contactTypes.map(
                                            (contactType, index) => (
                                                <MenuItem
                                                    value={contactType}
                                                    key={index}
                                                >
                                                    {contactType}
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
                                    inputProps={{
                                        maxLength: 4,
                                    }}
                                    {...field}
                                />
                            )}
                        />
                    </Grid>
                    <br />
                    <br />
                    {error && (
                        <Alert severity="error" style={{ marginBottom: "1em" }}>
                            Error - Something went wrong
                        </Alert>
                    )}
                    <Button
                        startIcon={<AddIcon />}
                        variant="contained"
                        color="success"
                        style={{ marginBottom: "1em" }}
                        type="submit"
                        fullWidth
                    >
                        Add Shelter
                    </Button>
                </Box>
            </Paper>
        </form>
    );
};

export default ShelterForm;

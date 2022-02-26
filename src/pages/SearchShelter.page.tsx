import {
    Autocomplete,
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useFetch } from "../hooks/useFetch";
import ShelterPageDescription from "../shared/components/atoms/ShelterPageDescription.atom";
import ShelterPageTitle from "../shared/components/atoms/ShelterPageTitle.atom";
import ShelterPage from "../shared/components/partials/ShelterPage.partial";
import { ContactType } from "../shared/schemas/Contact.type";
import { ShelterType } from "../shared/schemas/Shelter.type";

type SearchShelterCardProps = {
    title: string;
    children?: React.ReactNode;
    beds: number;
    contactsArr: ContactType[];
    petFriendly: boolean;
};

const SearchShelterCard: React.FC<SearchShelterCardProps> = ({
    children,
    title,
    beds,
    contactsArr,
    petFriendly,
}) => {
    const [canDelete, setCanDelete] = React.useState(false);

    return (
        <Card variant="outlined" sx={{ marginTop: "10px", padding: "20px" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography paragraph>
                    <strong>Number of beds:</strong> {beds}
                </Typography>
                <Typography paragraph>
                    <strong>
                        Accepts animals: {petFriendly ? "Yes" : "No"}
                    </strong>
                    <div>
                        <strong>Contacts:</strong>
                        <ul>
                            {contactsArr?.map((contact) => (
                                <li key={contact.id}>
                                    <strong>{contact.type}</strong>
                                    {contact.number}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Typography>

                {!canDelete && (
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            setCanDelete(true);
                        }}
                    >
                        Delete
                    </Button>
                )}
                {canDelete && (
                    <>
                        <TextField
                            fullWidth
                            required
                            type="number"
                            placeholder="0000"
                            label="SecurityCode"
                            variant="standard"
                            margin="normal"
                        />
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                                setCanDelete(false);
                            }}
                        >
                            Delete
                        </Button>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

const SearchShelterPage: React.FC = () => {
    const {
        data: shelters,
        error,
        isFetching,
    } = useFetch<ShelterType[]>(
        "https://ukraineshelter-app.azurewebsites.net/shelter/list"
    );

    if (isFetching) {
        return <div>Loading...</div>;
    }

    if (!shelters || error) {
        return <div>error</div>;
    }

    return (
        <ShelterPage>
            <Grid container direction="column">
                <Grid item>
                    <ShelterPageTitle>Search a Shelter</ShelterPageTitle>
                    <ShelterPageDescription>
                        Here you can search shelters.
                    </ShelterPageDescription>
                </Grid>

                <Grid item>
                    <Autocomplete
                        fullWidth
                        disablePortal
                        options={[]}
                        renderInput={(params) => (
                            <TextField {...params} label="Country" />
                        )}
                    />
                </Grid>

                <Grid item>
                    <Stack>
                        {shelters.map((shelter) => (
                            <SearchShelterCard
                                title={`${shelter.country} - ${shelter.city}`}
                                beds={shelter.numberOfBeds}
                                key={shelter.id}
                                contactsArr={shelter.contactArr}
                                petFriendly={shelter.petFriendly}
                            ></SearchShelterCard>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </ShelterPage>
    );
};

export default SearchShelterPage;

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
import React, { useState } from "react";
import ShelterPageDescription from "../shared/components/atoms/ShelterPageDescription.atom";
import ShelterPageTitle from "../shared/components/atoms/ShelterPageTitle.atom";
import ShelterPage from "../shared/components/partials/ShelterPage.partial";
import { ContactType } from "../shared/schemas/Contact.type";
import { ShelterType } from "../shared/schemas/Shelter.type";
import { useQuery } from "react-query";
import axios from "axios";
import { queryClient } from "../services/queryClient";
import Loader from "../shared/components/atoms/Loader.atom";

type SearchShelterCardProps = {
    shelter: ShelterType;
};

const SearchShelterCard: React.FC<SearchShelterCardProps> = ({ shelter }) => {
    const [code, setCode] = useState<string>();

    const handleDelete = async () => {
        await axios.delete(
            "https://ukraineshelter-app.azurewebsites.net/shelter/delete",
            {
                data: {
                    ...shelter,
                    securityCode: code,
                },
            }
        );

        queryClient.refetchQueries("shelters");
    };

    return (
        <Card variant="outlined" sx={{ marginTop: "10px", padding: "20px" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {`${shelter.country} - ${shelter.city}`}
                </Typography>
                <Typography paragraph>
                    <strong>Number of beds:</strong> {shelter.numberOfBeds}
                </Typography>
                <Typography paragraph>
                    <strong>
                        Accepts animals: {shelter.petFriendly ? "Yes" : "No"}
                    </strong>
                    <div>
                        <strong>Contact: </strong>
                        <ul>
                            <li key={shelter.contact.id}>
                                <strong>{shelter.contact.contactType}: </strong>
                                {shelter.contact.number}
                            </li>
                        </ul>
                    </div>
                </Typography>
                <TextField
                    fullWidth
                    required
                    type="number"
                    placeholder="0000"
                    label="SecurityCode"
                    variant="standard"
                    margin="normal"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
};

const SearchShelterPage: React.FC = () => {
    const {
        data: shelters,
        error,
        isFetching,
    } = useQuery<ShelterType[]>(
        "shelters",
        async () => {
            const response = await axios.get(
                "https://ukraineshelter-app.azurewebsites.net/shelter/list?aCountry="
            );

            return response.data;
        },
        {
            refetchOnWindowFocus: false,
        }
    );

    const handleCountryChange = async (event: any, country: string | null) => {
        const response = await axios({
            method: "get",
            url: `https://ukraineshelter-app.azurewebsites.net/shelter/list?${
                country !== null ? "aCountry=" + country : "aCountry="
            }`,
        });
        queryClient.setQueryData("shelters", response.data);
    };

    if (isFetching) {
        return <Loader />;
    }

    if (!shelters || error) {
        return <div>error</div>;
    }

    const countries = () => {
        var arr: string[] = [];

        shelters.forEach((shelter) => {
            var i = arr.findIndex((x) => x === shelter.country);

            if (i <= -1) {
                arr.push(shelter.country);
            }
        });
        return arr;
    };

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
                        options={countries()}
                        onChange={handleCountryChange}
                        renderInput={(params) => (
                            <TextField {...params} label="Country" />
                        )}
                    />
                </Grid>

                <Grid item>
                    <Stack>
                        {shelters.map((shelter) => (
                            <SearchShelterCard
                                shelter={shelter}
                                key={shelter.id}
                            />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </ShelterPage>
    );
};

export default SearchShelterPage;

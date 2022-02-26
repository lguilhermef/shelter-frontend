import { Autocomplete, Card, CardContent, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import ShelterPageDescription from "../shared/components/atoms/ShelterPageDescription.atom";
import ShelterPageTitle from "../shared/components/atoms/ShelterPageTitle.atom";
import ShelterPage from "../shared/components/partials/ShelterPage.partial";

type SearchShelterCardProps = {
    title?: string,
    children?: React.ReactNode,
    beds?: number,

}

const SearchShelterCard: React.FC<SearchShelterCardProps> = ({ children, title, beds = 0 }) => {

    return (
        <Card variant="outlined" sx={{ marginTop: "10px", padding: "20px"}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography paragraph><strong>Number of beds:</strong> {beds}</Typography>
                <Typography paragraph>
                    <strong>Accepts animals</strong>
                    <div>
                        <strong>Contacts:</strong>
                        <ul>
                            <li><strong>WhatsApp:</strong> 12345678</li>
                            <li><strong>Viber:</strong> 12345678</li>
                            <li><strong>Telegram:</strong>  @accountName</li>
                        </ul>
                    </div>
                </Typography>

            </CardContent>
        </Card>
    )
}

const SearchShelterPage: React.FC = () => {
    return (
        <ShelterPage>
            <Grid container direction="column">
                <Grid item>
                    <ShelterPageTitle>Search a Shelter</ShelterPageTitle>
                    <ShelterPageDescription>Here you can search shelters.</ShelterPageDescription>
                </Grid>

                <Grid item>
                    <Autocomplete
                        fullWidth
                        disablePortal
                        options={[]}
                        renderInput={(params) => <TextField {...params} label="Country" />}
                        />
                </Grid>

                <Grid item>
                    <Stack>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                        <SearchShelterCard title="Country - City" beds={12}></SearchShelterCard>
                    </Stack>
                </Grid>
            </Grid>
        </ShelterPage>

    );
};

export default SearchShelterPage;
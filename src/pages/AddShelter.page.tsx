import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShelterPage from "../shared/components/partials/ShelterPage.partial";
import axios from "axios";
import ContactEnum from "../shared/enums/Contact.enum";
import ShelterForm from "../shared/components/partials/ShelterForm";

export type NewShelter = {
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
    const [error, setError] = useState<boolean>(false);

    const onSubmit = async (data: NewShelter) => {
        await axios
            .post(
                "https://ukraineshelter-app.azurewebsites.net/shelter/add",
                data
            )
            .then(() => {
                navigate("/search-shelter");
            })
            .catch((error) => setError(true));
    };

    const contactTypes = Object.values(ContactEnum).map(
        (contactType) => contactType
    );

    return (
        <ShelterPage>
            <Grid container direction="column">
                <ShelterForm
                    error={error}
                    contactTypes={contactTypes}
                    onSubmit={onSubmit}
                />
            </Grid>
        </ShelterPage>
    );
};

export default AddShelter;

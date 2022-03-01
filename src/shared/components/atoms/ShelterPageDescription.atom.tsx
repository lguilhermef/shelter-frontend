import { Typography } from "@mui/material";
import React from "react";

const ShelterPageDescription: React.FC = ({ children }) => (
    <Typography paragraph m="32px 16px" sx={{ fontSize: "1.3em" }}>
        {children}
    </Typography>
);

export default ShelterPageDescription;

import { Typography } from "@mui/material";
import React from "react";

const ShelterPageTitle: React.FC = ({ children }) => (
    <Typography
        align="center"
        gutterBottom
        variant="h3"
        m="32px 16px"
        sx={{ fontWeight: "bold" }}
    >
        {children}
    </Typography>
);

export default ShelterPageTitle;

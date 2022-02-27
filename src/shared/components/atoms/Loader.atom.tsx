import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress size={100} />
        </Box>
    );
};

export default Loader;

import React from "react";
import {CircularProgress} from "@mui/material";

export const CentralLoader: React.FC = () => {
    return <div style={{textAlign: 'center', margin: 20}}>
        <CircularProgress disableShrink/>
    </div>
}
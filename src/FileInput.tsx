import React, {ChangeEvent} from "react";
import {Button} from "@mui/material";


export const FileInput: React.FC<{
    setData: (data: object) => void,
    setFileChosen: (chosen: boolean) => void
}> = ({setData, setFileChosen}) => {
    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0]
        if (!file) {
            return
        }
        setFileChosen(true);
        setData(JSON.parse(await file.text()));
    };
    return <div>
        <Button variant="contained" style={{textTransform: 'none'}} component="label">
            Upload JSON
            <input hidden type="file" name="file" onChange={handleFileChange} accept=".json"/>
        </Button>

    </div>
}
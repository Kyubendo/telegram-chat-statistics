import React, {ChangeEvent, useState} from "react";

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
        <input type="file" name="file" onChange={handleFileChange} accept=".json"/>
    </div>
}
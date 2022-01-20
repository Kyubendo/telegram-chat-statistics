import React from "react";
import {PeriodBarChart} from "./PeriodBarChart";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Charts: React.FC<{ data: object }> = ({data}) => {
    return <div style={{margin: 20}}>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant='h5' >Messages by day time</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <PeriodBarChart rawData={data} color='#82ca9d'
                                periodFilter={date => date.match(/T(\d{2})/)?.[1] || ''}/>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls="panel2a-content" id="panel2a-header">
                <Typography variant='h5'>Messages by month</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <PeriodBarChart rawData={data} color='#8884d8' periodFilter={(date => date.substring(0, 7))}/>
            </AccordionDetails>
        </Accordion>
    </div>
}
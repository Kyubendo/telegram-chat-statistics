import React from "react";
import {PeriodBarChart} from "./PeriodBarChart";
import {Box, Grid, Paper, styled} from "@mui/material";
import {UserPieChart} from "./UserPieChart";
import {TopEmojis} from "./TopEmojis";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Item2 = styled(Paper)(({theme}) => ({ // refactor
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height:500,
    color: theme.palette.text.secondary,
}));

export const Charts: React.FC<{ data: object }> = ({data}) => {
    return <Box m={4}>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Item2>
                    <h2>Messages by user</h2>
                    <UserPieChart rawData={data}/>
                </Item2>
            </Grid>
            <Grid item xs={4}>
                <Item2>
                    <h2>Top emojis</h2>
                    <TopEmojis rawData={data}/>
                </Item2>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <h2>Messages by day time</h2>
                    <PeriodBarChart rawData={data} color='#82ca9d'
                                    periodFilter={msg => msg.date.match(/T(\d{2})/)?.[1] || ''}/>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <h2>Messages by month</h2>
                    <PeriodBarChart rawData={data} color='#8884d8'
                                    periodFilter={(msg => msg.date.substring(0, 7))}/>
                </Item>
            </Grid>
        </Grid>
    </Box>

}
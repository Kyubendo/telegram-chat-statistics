import React from "react";
import {ResponsiveContainer, BarChart, XAxis, CartesianGrid, Tooltip, Legend, Bar, YAxis} from "recharts";
import {aggregateMessages} from "./Utils/aggregateMessages";

export const PeriodBarChart: React.FC<{
    rawData: object,
    color: string,
    periodFilter: (date: any) => string
}> = ({rawData, color, periodFilter}) => {
    const data = aggregateMessages(rawData, periodFilter)
    return <ResponsiveContainer width="100%" height={500}>
        <BarChart
            width={1200}
            height={500}
            data={data}
            margin={{
                top: 60,
                right: 30,
                left: 20,
                bottom: 25,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="label"/>
            <YAxis/>
            <Tooltip/>
            <Legend wrapperStyle={{position: 'relative'}}/>
            <Bar name={'Message count'} dataKey="count" fill={color}/>
        </BarChart>
    </ResponsiveContainer>
}

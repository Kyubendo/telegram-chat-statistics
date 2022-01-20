import React from "react";
import {ResponsiveContainer, BarChart, XAxis, CartesianGrid, Tooltip, Legend, Bar, YAxis} from "recharts";

type ChartData = {
    period: string,
    msgCount: number,
}[]

const generateDateChartData = (rawData: any, periodFilter: (date: string) => string): ChartData => {
    const tempData: { [k: string]: number } = {}
    rawData.messages.forEach((m: any) => {
        const period = periodFilter(m.date)
        tempData[period] = tempData[period] === undefined ? 1 : tempData[period] + 1
    })
    return Object.keys(tempData)
        .sort()
        .map(k => ({
            period: k,
            msgCount: tempData[k]
        }))
}

export const PeriodBarChart: React.FC<{
    rawData: object,
    color: string,
    periodFilter: (date: string) => string
}> = ({rawData, color, periodFilter}) => {
    const data = generateDateChartData(rawData, periodFilter)
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
            <XAxis dataKey="period"/>
            <YAxis/>
            <Tooltip/>
            <Legend wrapperStyle={{ position: 'relative' }}/>
            <Bar name={'Message count'} dataKey="msgCount" fill={color}/>
        </BarChart>
    </ResponsiveContainer>
}

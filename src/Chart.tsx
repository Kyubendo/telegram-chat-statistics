import React from "react";
import {ResponsiveContainer, BarChart, XAxis, CartesianGrid, Tooltip, Legend, Bar, YAxis} from "recharts";


type ChartElement = {
    time: string,
    msgCount: number,
}

const createChartData = (rawData: any): ChartElement[] => {
    const tempData: { [k: string]: number } = {}
    rawData.messages.forEach((m: any) => {
        const time = m.date.match(/T(\d{2})/)[1]
        tempData[time] = tempData[time] === undefined ? 1 : tempData[time] + 1
    })
    return Object.keys(tempData).sort().map(k => ({
        time: k,
        msgCount: tempData[k]
    }))

}
export const Chart: React.FC<{ rawData: object }> = ({rawData}) => {
    const data = createChartData(rawData)
    return <>
        <BarChart
            width={1200}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="time"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar name={'Message count'} dataKey="msgCount" fill="#82ca9d"/>
        </BarChart>
    </>
}

import React from "react";
import {ResponsiveContainer, BarChart, XAxis, CartesianGrid, Tooltip, Legend, Bar, YAxis} from "recharts";


type ChartElement = {
    month: string,
    msgCount: number,
}

const createChartData = (rawData: any): ChartElement[] => {
    const tempData: { [k: string]: number } = {}
    rawData.messages.forEach((m: any) => {
        const day = m.date?.substring(0, 7)
        tempData[day] = tempData[day] === undefined ? 1 : tempData[day] + 1
    })
    return Object.keys(tempData)
        .sort()
        .map(k => ({
            month: k,
            msgCount: tempData[k]
        }))

}
export const DateChart: React.FC<{ rawData: object }> = ({rawData}) => {
    const data = createChartData(rawData)
    return <ResponsiveContainer width="100%" height={500}>
        <BarChart
            width={1200}
            height={500}
            data={data}
            margin={{
                top: 60,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="month"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar name={'Message count'} dataKey="msgCount" fill="#8884d8"/>
        </BarChart>
    </ResponsiveContainer>
}

import React from "react";
import {Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {ChartData} from "./Utils/aggregateMessages";
import {getText} from "./Utils/getText";

const aggregateMessages = (rawData: any,): ChartData => {
    const tempData: { [k: string]: { words: number, msgCount: number } } = {}
    rawData.messages.forEach((m: any) => {
        if (!m.text) {
            return
        }
        const user = m.from
        const msgLength = getText(m.text).split(' ').length
        tempData[user] = tempData[user] === undefined
            ? {words: msgLength, msgCount: 1}
            : {words: tempData[user].words + msgLength, msgCount: tempData[user].msgCount + 1}
    })
    let data = Object.keys(tempData)
    return data
        .map(k => ({
            label: k,
            count: Math.floor(tempData[k].words * 100 / tempData[k].msgCount) / 100
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10)

}

export const MessagesLength: React.FC<{ rawData: any }> = ({rawData}) => {
    const data = aggregateMessages(rawData)
    const maxData = data.reduce((a, c) => a > c.count ? a : c.count, 0)
    return <ResponsiveContainer width="100%" height='85%'>
        <BarChart
            layout='vertical'
            width={1200}
            height={500}
            data={data}
            margin={{
                top: 60,
                right: 30,
                left: 40,
                bottom: 25,
            }}
        >
            <CartesianGrid horizontal={false} strokeDasharray="3 3"/>
            <XAxis dataKey='count' type='number'/>
            <YAxis type='category' dataKey="label"/>
            <Tooltip/>
            <Bar name={'Message length'} dataKey="count" fill={'#aaa'}>
                {
                    data.map((e, i) =>
                        <Cell key={`msg-l-cell-${i}`} fill={`rgba(10, 140, 180, ${(e.count / maxData) ** .75})`}/>
                    )
                }
            </Bar>
        </BarChart>
    </ResponsiveContainer>
}

import * as React from "react";
import {PieChart, Pie, Cell, ResponsiveContainer,} from 'recharts';
import {doubleLabel} from "./doubleLabel";
import {aggregateMessages} from "./Utils/aggregateMessages";

const colors = ['#c24343', '#3c50ab', '#4fc054',
    '#bbc94c', '#a463c9', '#ed9c4b',
    '#49b6bb', '#e36bb1', '#8ec6b0']

export const UserPieChart: React.FC<{ rawData: object }> = ({rawData}) => {

    const data = aggregateMessages(rawData, msg => msg.from, false)
        .sort((a, b) => b.count - a.count)
        .slice(0, 8)

    return <ResponsiveContainer width={'100%'} height={'80%'}>
        <PieChart>
            <Pie
                data={data.filter(i => i.count)}
                cx={'50%'}
                cy={'50%'}
                labelLine
                nameKey='label'
                label={doubleLabel()}
                outerRadius={'80%'}
                fill="#8884d8"
                dataKey="count"
                animationDuration={500}
            >
                {
                    data.map((item, index) => <Cell key={`cell-${index}`} fill={colors[index]}/>)
                }
            </Pie>
        </PieChart>
    </ResponsiveContainer>
}

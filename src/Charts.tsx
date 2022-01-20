import React from "react";
import {TimeChart} from "./TimeChart";
import {DateChart} from "./DateChart";

export const Charts: React.FC<{ data: object }> = ({data}) => {
    return <div>
        <TimeChart rawData={data}/>
        <p>Messages by day time</p>
        <DateChart rawData={data}/>
        <p>Messages by month</p>
    </div>
}
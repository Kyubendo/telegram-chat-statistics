import * as React from 'react';
import {ChartData} from "./Utils/aggregateMessages";
import {getText} from "./Utils/getText";
import {List, ListItem, ListItemText} from "@mui/material";

const aggregateMessages = (rawData: any): ChartData => {
    const tempData: { [k: string]: number } = {}
    rawData.messages.forEach((msg: any) => {
            if (!msg.text.length) {
                return
            }
            getText(msg.text)
                .match(/\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu)
                ?.forEach((e: any) => tempData[e] = tempData[e] === undefined ? 1 : tempData[e] + 1)
        }
    )
    let data = Object.keys(tempData)
    return data.map(k => ({
        label: k,
        count: tempData[k]
    }))
}
export const TopEmojis: React.FC<{ rawData: any }> = ({rawData}) => {
    return <List>
        {aggregateMessages(rawData)
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
            .map((e, i) => <ListItem>
                <ListItemText
                    primary={`${i + 1}. ${e.label}`}
                    secondary={`${e.count} times`}
                />
            </ListItem>)}
    </List>

}

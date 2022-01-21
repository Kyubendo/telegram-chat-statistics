export type ChartData = {
    label: string,
    count: number,
}[]

export const aggregateMessages = (rawData: any, extrude: (msg: any) => string, keySort = true): ChartData => {
    const tempData: { [k: string]: number } = {}
    rawData.messages.forEach((m: any) => {
        const key = extrude(m)
        if (!key) {
            return
        }
        tempData[key] = tempData[key] === undefined ? 1 : tempData[key] + 1
    })
    let data = Object.keys(tempData)
    if (keySort) data.sort();

    return data.map(k => ({
        label: k,
        count: tempData[k]
    }))
}
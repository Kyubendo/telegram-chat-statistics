export const getText = (data: any[] | string): string => typeof data === 'string'
    ? data
    : data.map(e => typeof e === 'string' ? e : e.text).join(' ')
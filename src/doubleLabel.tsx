import {PieLabelRenderProps} from 'recharts';

const radian = Math.PI / 180;

export const doubleLabel = (params?: { nameDecorator?: (value: string) => string, color?: string }) => (pieInfo: PieLabelRenderProps) => {
    const pieInnerRadius = +(pieInfo.innerRadius ?? 0)
    const pieOuterRadius = +(pieInfo.outerRadius ?? 0)
    const pieMidAngle = +(pieInfo.midAngle ?? 0)
    const pieCX = +(pieInfo.cx ?? 0)
    const pieCY = +(pieInfo.cy ?? 0)

    const innerRadius = pieInnerRadius + (pieOuterRadius - pieInnerRadius) * 0.75;
    const innerX = pieCX + innerRadius * Math.cos(-pieMidAngle * radian);
    const innerY = pieCY + innerRadius * Math.sin(-pieMidAngle * radian);


    const outerRadius = pieOuterRadius + 24;
    const outerX = pieCX + outerRadius * Math.cos(-pieMidAngle * radian);
    const outerY = pieCY + outerRadius * Math.sin(-pieMidAngle * radian);

    return (
        <svg>
            <text
                x={innerX}
                y={innerY}
                fill="#fff"
                textAnchor='middle'
                dominantBaseline="central"
            >
                {
                    ((pieInfo.percent ?? 0) < .05)
                        ? null
                        : (<>
                            <tspan x={innerX} textAnchor={'middle'} dy={'-0.6em'}>
                                {pieInfo.value}
                            </tspan>
                            <tspan x={innerX} textAnchor={'middle'} dy={'1.2em'}>
                                {`${((pieInfo.percent ?? 0) * 100).toFixed(0)}%`}
                            </tspan>
                        </>)
                }
            </text>
            <text
                x={outerX}
                y={outerY}
                fill={params?.color ? params.color : pieInfo.fill}
                textAnchor={outerX > pieCX ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {params?.nameDecorator ? params.nameDecorator(pieInfo.name) : pieInfo.name}
            </text>
        </svg>
    );
};
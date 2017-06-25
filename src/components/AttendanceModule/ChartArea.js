import React, {Component} from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, Legend,
  LabelList, ResponsiveContainer
} from 'recharts';

const data = [
  {name: 'Page A', pv: 2400, time: 0},
  {name: 'Page B', pv: 1398, time: 10},
  {name: 'Page C', pv: 9800, time: 12},
  {name: 'Page D', pv: 3908, time: 14},
  {name: 'Page E', pv: 4800, time: 16},
  {name: 'Page F', pv: 3800, time: 18},
  {name: 'Page G', pv: 4300, time: 20},
];

const renderCustomizedActiveDot = (props) => {
  const {cx, cy, stroke, dataKey} = props;
  return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={`dot-${dataKey}`}/>;
};


class ChartArea extends Component {
  render() {

    return (
      <div className="area-charts">

        <div className="area-chart-wrapper">
          <ResponsiveContainer height={400}>
            <AreaChart data={data} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="time" type="number" interval={0}>
              </XAxis>
              <YAxis />
              <Tooltip />
              <Area
                stackId="0"
                type="monotone"
                dataKey="pv"
                stroke="#387908"
                fill="#387908"
                animationBegin={1300}
                dot
                activeDot={renderCustomizedActiveDot}
              >
                <LabelList position="top"/>
              </Area>
              <Legend layout="horizontal" align="center"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
};

export default ChartArea;
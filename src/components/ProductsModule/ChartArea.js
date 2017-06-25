import React, {Component} from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, Legend,
  LabelList, ResponsiveContainer
} from 'recharts';
import {cyan900, cyan800} from 'material-ui/styles/colors';

const data = [
  {name: 'Day 1', pv: 2400, time: 0, mv: 450},
  {name: 'Day 2', pv: 2800, time: 10, mv: 500},
  {name: 'Day 3', pv: 2880, time: 12, mv: 750},
  {name: 'Day 4', pv: 3908, time: 14, mv: 200},
  {name: 'Day 5', pv: 3400, time: 16, mv: 1900},
  {name: 'Day 6', pv: 3200, time: 18, mv: 2800},
  {name: 'Day 7', pv: 4300, time: 20, mv: 1000},
  {name: 'Day 8', pv: 2400, time: 30, mv: 450},
  {name: 'Day 9', pv: 3800, time: 40, mv: 400},
  {name: 'Day 10', pv: 4880, time: 50, mv: 1000},
  {name: 'Day 11', pv: 5908, time: 60, mv: 2000},
  {name: 'Day 12', pv: 4400, time: 70, mv: 1900},
  {name: 'Day 13', pv: 6200, time: 80, mv: 1700},
  {name: 'Day 14', pv: 7300, time: 90, mv: 1000},
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
              <XAxis dataKey="name">
              </XAxis>
              <YAxis />
              <Tooltip />
              <Area
                stackId="0"
                type="monotone"
                dataKey="pv"
                stroke={cyan900}
                fill={cyan900}
                animationBegin={1300}
                dot
                activeDot={renderCustomizedActiveDot}
              >
                <LabelList position="top"/>
              </Area>
              <Area
                stackId="0"
                type="monotone"
                dataKey="mv"
                stroke={cyan800}
                fill={cyan800}
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
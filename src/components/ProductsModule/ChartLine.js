import React, {Component} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts';

const data = [
  {name: '6:00 AM', uv: 120, pv: 100, amt: 2400},
  {name: '7:00 AM', uv: 380, pv: 400, amt: 2210},
  {name: '8:00 AM', uv: 900, pv: 800, amt: 2290},
  {name: '9:00 AM', uv: 950, pv: 908, amt: 2000},
  {name: '10:00 AM', uv: 890, pv: 800, amt: 2181},
  {name: '11:00 AM', uv: 1000, pv: 900, amt: 2500},
  {name: '12:00 PM', uv: 1490, pv: 1300, amt: 2100},
  {name: '1:00 PM', uv: 2000, pv: 1400, amt: 2400},
  {name: '2:00 PM', uv: 2400, pv: 2398, amt: 2210},
  {name: '3:00 PM', uv: 3800, pv: 3800, amt: 2290},
  {name: '4:00 PM', uv: 4980, pv: 4908, amt: 2000},
  {name: '5:00 PM', uv: 5890, pv: 5800, amt: 2181},
  {name: '6:00 PM', uv: 6890, pv: 6800, amt: 2500},
  {name: '7:00 PM', uv: 6990, pv: 6900, amt: 2100},
];

class ChartLine extends Component {
  render() {
    return (
      <ResponsiveContainer height={400}>
        <LineChart width={600} height={300} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}} label="Weekly Sale">
          <XAxis dataKey="name" />
          <YAxis dataKey="pv"/>
          <CartesianGrid/>
          <ReferenceLine y={6100} stroke="red" strokeDasharray="3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="green" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="red" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartLine;
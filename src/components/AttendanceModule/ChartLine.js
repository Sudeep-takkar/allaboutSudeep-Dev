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
  {name: 'A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'G', uv: 3490, pv: 4300, amt: 2100},
  {name: 'AA', uv: 4000, pv: 2400, amt: 2400},
  {name: 'AB', uv: 3000, pv: 1398, amt: 2210},
  {name: 'AC', uv: 2000, pv: 9800, amt: 2290},
  {name: 'AD', uv: 2780, pv: 3908, amt: 2000},
  {name: 'AE', uv: 1890, pv: 4800, amt: 2181},
  {name: 'AF', uv: 2390, pv: 3800, amt: 2500},
  {name: 'AG', uv: 3490, pv: 4300, amt: 2100},
];

class ChartLine extends Component {
  render() {
    return (
      <ResponsiveContainer height={400}>
        <LineChart width={600} height={300} data={data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name" interval={0}/>
          <YAxis dataKey="pv"/>
          <CartesianGrid/>
          <ReferenceLine y={7800} stroke="red" strokeDasharray="3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartLine;
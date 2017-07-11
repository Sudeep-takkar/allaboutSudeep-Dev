import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, mv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, mv: 1400, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 5000, mv: 200, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, mv: 2100, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, mv: 2200, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, mv: 1400, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 2300, mv: 2000, amt: 2100},
];
class StackedBarChart extends React.Component {
  render() {
    return (
      <ResponsiveContainer height={400}>
        <BarChart width={600} data={data}
                  margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8"/>
          <Bar dataKey="uv" stackId="a" fill="#82ca9d"/>
          <Bar dataKey="mv" stackId="a" fill="#f1bbbb"/>
          <Bar dataKey="amt" stackId="a" fill="lightblue"/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default StackedBarChart;
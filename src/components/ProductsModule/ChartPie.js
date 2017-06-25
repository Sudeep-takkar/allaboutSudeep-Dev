import React, {Component} from 'react';
import {PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import {scaleOrdinal, schemeCategory10} from 'd3-scale';

const colors = scaleOrdinal(schemeCategory10).range();

const data01 = [
  {name: 'Before 9:00', value: 400, v: 89},
  {name: '9:00 - 9:30', value: 300, v: 100},
  {name: '9:30 - 10:00', value: 200, v: 200},
  {name: '10:00 - 10:30', value: 200, v: 20},
  {name: '10:30 - 11:00', value: 278, v: 40},
  {name: 'After 11', value: 189, v: 60},
];

const CustomTooltip = (props) => {
  const {active, payload} = props;
  if (active) {
    return (
      <div className="custom-tooltip" style={{backgroundColor: 'white'}}>
        <p className="label">{`${payload[0].payload.name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};


class ChartPie extends Component {
  render() {
    return (
      <ResponsiveContainer height={400}>
        <PieChart>
          <Legend layout="vertical" align="right" iconSize={16} iconType={'square'}/>
          <Pie
            data={data01}
            dataKey="value"
            startAngle={180}
            endAngle={-180}
            outerRadius={75}
            innerRadius={35}>
            {
              data01.map((entry, index) => (
                <Cell key={`slice-${index}`} fill={colors[index % 10]}/>
              ))
            }
          </Pie>
          <Tooltip content={<CustomTooltip />}/>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartPie;
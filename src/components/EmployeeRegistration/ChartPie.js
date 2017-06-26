import React, {Component} from 'react';
import {PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import {scaleOrdinal, schemeCategory10} from 'd3-scale';

const colors = scaleOrdinal(schemeCategory10).range();

const data01 = [
  {name: 'Option A', value: 400, v: 89},
  {name: 'Option B', value: 300, v: 100},
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
      <ResponsiveContainer height={150}>
        <PieChart>
          {/*<Legend />*/}
          <Pie
            data={data01}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            outerRadius={75}
            innerRadius={45}>
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
import React, {Component} from 'react';
import {
  BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer
} from 'recharts';
import _ from 'underscore';
import {Grid} from 'grid-styled';

const data = [
  {name: 'testing', uv: 126.6},
  {name: 'cosmetic', uv: 118.2},
  {name: 'storage', uv: 116.7},
  {name: 'Test1', uv: 114.0},
  {name: 'Test2', uv: 111.0},
  {name: 'Test3', uv: 109.0},
  {name: 'Test4', uv: 107.6},
  {name: 'food', uv: 103.8},
  {name: 'cosmetic', uv: 102.1},
  {name: 'storage', uv: 99.5},
  {name: 'Test1', uv: 90.5},
  {name: 'Test2', uv: 83.9},
  {name: 'Test3', uv: 81.6},
  {name: 'Test4', uv: 80.9},
  {name: 'testing', uv: 80.4},
  {name: 'cosmetic', uv: 64.3},
  {name: 'storage', uv: 57.6},
  {name: 'Test1', uv: 56.2},
  {name: 'Test2', uv: 52.0},
  {name: 'Test3', uv: 46.5},
  {name: 'Test4', uv: 45.2},
  {name: 'food', uv: 41.4},
  {name: 'cosmetic', uv: 40.1},
  {name: 'storage', uv: 39.9},
  {name: 'Test1', uv: 29.0},
  {name: 'Test2', uv: 26.9},
  {name: 'Test3', uv: 26.3},
  {name: 'Test4', uv: 12.8},
  {name: 'storage', uv: 8.9},
  {name: 'Test1', uv: 7.3},
  {name: 'Test2', uv: 4.9},
  {name: 'Test3', uv: 4.3},
  {name: 'Test4', uv: 2.2},
  {name: 'Test3', uv: 0.6},
  {name: 'Test4', uv: 0.1},

];

const data2 = [
  {name: 'testing', uv: 153.6},
  {name: 'cosmetic', uv: 152.2},
  {name: 'storage', uv: 138.7},
  {name: 'Test1', uv: 143.0},
  {name: 'Test2', uv: 124.0},
  {name: 'Test3', uv: 119.0},
  {name: 'Test4', uv: 152.6},
  {name: 'food', uv: 141.8},
  {name: 'cosmetic', uv: 130.1},
  {name: 'storage', uv: 131.5},
  {name: 'Test1', uv: 156.5},
  {name: 'Test2', uv: 100.9},
  {name: 'Test3', uv: 145.6},
  {name: 'Test4', uv: 139.9},
  {name: 'testing', uv: 12.4},
  {name: 'cosmetic', uv: 93.3},
  {name: 'storage', uv: 97.6},
  {name: 'Test1', uv: 53.2},
  {name: 'Test2', uv: 55.0},
  {name: 'Test3', uv: 36.5},
  {name: 'Test4', uv: 91.2},
  {name: 'food', uv: 102.4},
  {name: 'cosmetic', uv: 77.1},
  {name: 'storage', uv: 47.9},
  {name: 'Test1', uv: 0},
  {name: 'Test2', uv: 98.6},
  {name: 'Test3', uv: 7.1},
  {name: 'Test4', uv: 81.8},
  {name: 'storage', uv: 23.9},
  {name: 'Test1', uv: 52.3},
  {name: 'Test2', uv: 6.9},
  {name: 'Test3', uv: 10.3},
  {name: 'Test4', uv: 3.2},
  {name: 'Test3', uv: 2.6},
  {name: 'Test4', uv: 1.1},

];

const rgb2hex = (rgb) =>{
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

const handleColor = (value, entry) => {
  let maxValue = _.max(value, function (element) {
    return element.uv;
  });
  let colorRed = Math.floor((255 * (100 - Math.floor(( entry.uv / maxValue.uv ) * 100))) / 100);
  let colorGreen = Math.floor((255 * Math.floor(( entry.uv / maxValue.uv ) * 100)) / 100);
  return rgb2hex(`rgba(${colorRed},${colorGreen},0,0)`);
};

class CustomizedLabel extends Component {
  render() {
    const {x, y, value, viewBox} = this.props;
    return <text x={viewBox.width + x + 25}
                 y={y + 10}
                 fontSize='10'
                 fontFamily='sans-serif'
                 textAnchor="end">{value}</text>
  }
}

const renderLabelContent = (props) => {
  const {viewBox} = props;
  return (
    <g textAnchor={"end"}>
      <text x={viewBox.width} y={viewBox.height}>{"test"}</text>
    </g>
  );
};

class ChartBar extends Component {
  render() {
    return (
      <div>
        <Grid width={[1, 1 / 2]}>
          <ResponsiveContainer height={600}>
            <BarChart data={data} layout="vertical"
                      margin={{top: 5, right: 25, left: 5, bottom: 5}}>
              <XAxis type="number" orientation="top" label="October" tick={false} tickLine={false}/>
              <YAxis type="category" dataKey="name" interval={0}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <ReferenceLine x="130" stroke="red" strokeDasharray="3 3" label={renderLabelContent}/>
              <ReferenceLine x="136" stroke="blue" strokeDasharray="3 3"/>
              <Legend />
              <Bar dataKey="uv" fill="#82ca9d" label={<CustomizedLabel />}>
                {
                  data.map((entry, index) => {
                    return <Cell key={`cell-${index}`} fill={handleColor(data, entry)}/>;
                  })
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid width={[1, 1 / 2]}>
          <ResponsiveContainer height={600}>
            <BarChart data={data2} layout="vertical"
                      margin={{top: 5, right: 25, left: 5, bottom: 5}}>
              <XAxis type="number" orientation="top" label="November" tick={false} tickLine={false}/>
              <YAxis type="category" dataKey="name" interval={0} tick={false} tickLine={false}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <ReferenceLine x="130" stroke="red" strokeDasharray="3 3" label={renderLabelContent}/>
              <ReferenceLine x="136" stroke="blue" strokeDasharray="3 3"/>
              <Legend />
              <Bar dataKey="uv" fill="#82ca9d" label={<CustomizedLabel />}>
                {
                  data2.map((entry, index) => {
                    return <Cell key={`cell-${index}`} fill={handleColor(data2, entry)}/>;
                  })
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </div>
    )
      ;
  }
}

export default ChartBar;
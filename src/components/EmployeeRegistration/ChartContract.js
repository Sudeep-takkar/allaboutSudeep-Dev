import React, {Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

class CustomizedLabel extends Component {
  render() {
    const {x, y, value, viewBox} = this.props;
    return <text x={viewBox.width + x - 20}
                 y={ y }
                 fontSize='10'
                 fontFamily='sans-serif'
                 textAnchor="end">{value}</text>
  }
}

class ChartContract extends Component {
  render() {
    console.log(this.props);
    const layout =  this.props.type === 'stacked' ? "vertical" : "horizontal";
    return (
      <div>
        <ResponsiveContainer height={300}>
          <BarChart data={this.props.data}
                    margin={{top: 20, right: 5, left: 5, bottom: 5}} layout={layout}>
            { this.props.type === 'stacked' && <XAxis type="number" />}
            { this.props.type === 'stacked' && <YAxis type="category" dataKey="name"/>}
            { this.props.type === 'nonstacked' && <XAxis dataKey="name" />}
            { this.props.type === 'nonstacked' && <YAxis />}
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            { this.props.type === 'stacked' && <Bar dataKey="pv" stackId="a" fill="#8884d8" />}
            { this.props.type === 'nonstacked' && <Bar dataKey="pv" stackId="a" fill="#8884d8" label={<CustomizedLabel/>}/>}
            { this.props.type === 'stacked' && <Bar dataKey="uv" stackId="a" fill="#82ca9d"/>}
            { this.props.type === 'nonstacked' && <Bar dataKey="uv" stackId="b" fill="#82ca9d" label={<CustomizedLabel/>}/>}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
;

export default ChartContract;
import React, {Component} from 'react';
import {
  BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer
} from 'recharts';
import {Grid} from 'grid-styled';

class CustomizedLabel extends Component {
  render() {
    const {x, y, value, viewBox} = this.props;
    return <text x={viewBox.width + x }
                 y={ y }
                 fontSize='10'
                 fontFamily='sans-serif'
                 textAnchor="end">{value}</text>
  }
}


class ChartBar extends Component {
  render() {
    return (
      <div>
        <Grid width={[1, 1]}>
          <ResponsiveContainer height={300}>
            <BarChart data={this.props.data} layout="horizontal"
                      margin={{top: 5, right: 25, left: 5, bottom: 5}}>
              <XAxis type="category" dataKey="name" />
              <YAxis type="number"/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <ReferenceLine x="130" stroke="red" strokeDasharray="3 3" />
              <ReferenceLine x="136" stroke="blue" strokeDasharray="3 3"/>
              <Legend />
              <Bar dataKey="uv" fill="yellow" label={<CustomizedLabel />}>
                {
                  this.props.data.map((entry, index) => {
                    return <Cell key={`cell-${index}`} fill={'yellow'}/>;
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
import React from 'react';
import {Grid, Flex} from 'grid-styled';
import {Card, CardText, CardHeader} from 'material-ui/Card';

import ChartPie from './EmployeeRegistration/ChartPie';
import ChartBar from './EmployeeRegistration/ChartBar';
import EmployeeCount from './EmployeeRegistration/EmployeeCount';
import ChartContract from './EmployeeRegistration/ChartContract';
import ChartGender from './EmployeeRegistration/ChartGender';

const data = {
  HeadCount: {
    title: 'HeadCount',
    year: 2015,
    data: 115,
    previousYear: 128,
    percent: -10.2
  },
  Hiring: {
    title: 'Hiring',
    year: 2015,
    data: 60,
    previousYear: 16,
    percent: 275.0
  },
  Leaving: {
    title: 'Leaving',
    year: 2015,
    data: 57,
    previousYear: 48,
    percent: 18.8
  },
  TurnOver: {
    title: 'TurnOver',
    year: 2015
  }
};

const contractData = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
];

const movementData = [
  {name: 'Page A', uv: 2000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: -3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: -2000, pv: -9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: -1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: -3800, amt: 2500},
  {name: 'Page G', uv: 1490, pv: 4300, amt: 2100},
];

const dataChartBar = [
  {name: 'jan', uv: 126.6},
  {name: 'feb', uv: 118.2},
  {name: 'mar', uv: 116.7},
  {name: 'apr', uv: 114.0},
  {name: 'may', uv: 111.0},
  {name: 'jun', uv: 109.0},
  {name: 'jul', uv: 107.6},
  {name: 'aug', uv: 103.8},
  {name: 'sep', uv: 102.1},
  {name: 'oct', uv: 99.5},
  {name: 'nov', uv: 90.5},
  {name: 'dec', uv: 107.6}
];

const EmployeeRegistration = () => {
  return (
    <div>
      <Grid width={[1, 1, 1 / 2, 1 / 4]} className="cardContainer">
        <EmployeeCount data={data.HeadCount}/>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 4]} className="cardContainer">
        <EmployeeCount data={data.Hiring}/>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 4]} className="cardContainer">
        <EmployeeCount data={data.Leaving}/>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 4]} className="cardContainer">
        <Card>
          <CardHeader title={data.TurnOver.title.toUpperCase() + ' ' + data.TurnOver.year}
          />
          <CardText>
            <ChartPie />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 2]} className="cardContainer">
        <Card>
          <CardHeader title="Active Employee over time 2015"
          />
          <CardText>
            <ChartBar data={dataChartBar}/>
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 4]} className="cardContainer">
        <Card>
          <CardHeader title="Contract Type 2015"
          />
          <CardText>
            <ChartContract data={contractData} type="stacked"/>
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 4]} className="cardContainer">
        <Card>
          <CardText>
            <ChartGender />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <ChartBar data={movementData} />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 2 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <ChartContract data={contractData} type="nonstacked"/>
          </CardText>
        </Card>
      </Grid>
    </div>
  )
};

export default EmployeeRegistration;

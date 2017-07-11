import React from 'react';
import {Grid} from 'grid-styled';
import {Card, CardText} from 'material-ui/Card';

import StackedBarChart from './DataDashboard/StackedBarChart';
import CustomShapeCharts from './DataDashboard/CustomShapeCharts';
import RadialChart from './DataDashboard/RadialChart';


class DataDashboard extends React.Component {
  render() {
    return (
      <div>
        <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
          <Card>
            <CardText>
              <StackedBarChart />
            </CardText>
          </Card>
        </Grid>
        <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
          <Card>
            <CardText>
              <CustomShapeCharts />
            </CardText>
          </Card>
        </Grid>
        <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
          <Card>
            <CardText>
              <RadialChart />
            </CardText>
          </Card>
        </Grid>
      </div>
    );
  };
}

export default DataDashboard;


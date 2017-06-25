import React from 'react';
import { Grid, Flex } from 'grid-styled';
import {Card, CardText} from 'material-ui/Card';
import ChartPie from './AttendanceModule/ChartPie';
import ChartArea from './AttendanceModule/ChartArea';
import ChartLine from './AttendanceModule/ChartLine';
import ChartBar from './AttendanceModule/ChartBar';
import TimeInfo from './AttendanceModule/TimeInfo';

const AttendanceModule = () => {
  return (
    <div>
      <Flex>
        <Grid width={[1, 1, 1 / 2, 1 / 2]} p={4}>
          <TimeInfo />
        </Grid>
      </Flex>
      <Grid width={[1, 1, 1 / 2, 1 / 2]} className="cardContainer">
        <Card>
          <CardText>
            <ChartPie />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 2]} className="cardContainer">
        <Card>
          <CardText>
            <ChartArea />
          </CardText>
        </Card>
      </Grid>
      <Grid width={1} className="cardContainer">
        <Card>
          <CardText>
            <ChartLine />
          </CardText>
        </Card>
      </Grid>
      <Grid width={1} className="cardContainer">
        <Card>
          <CardText>
            <ChartBar />
          </CardText>
        </Card>
      </Grid>
    </div>
  )
};

export default AttendanceModule;

import React from 'react';
import {Grid, Flex} from 'grid-styled';
import {Card, CardText} from 'material-ui/Card';
import ChartPie from './ProductsModule/ChartPie';
import ChartArea from './ProductsModule/ChartArea';
import ChartLine from './ProductsModule/ChartLine';
import TableSale from './ProductsModule/TableSale';
import TableIcon from './ProductsModule/TableIcon';
import ItemName from './ProductsModule/ItemName';
import TimeInfo from './AttendanceModule/TimeInfo';

const App = () => {
  return (
    <div>
      <Flex>
        <Grid width={[1, 1, 1 / 2, 1 / 2]} p={4}>
          <TimeInfo />
        </Grid>
      </Flex>
      <Flex>
        <Grid width={[1, 1, 1 / 2, 1 / 2]} p={4}>
          Dashboard > Summary
        </Grid>
      </Flex>
      <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <ChartLine />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <ChartPie />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <ChartArea/>
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <TableSale />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <TableIcon />
          </CardText>
        </Card>
      </Grid>
      <Grid width={[1, 1, 1 / 2, 1 / 3]} className="cardContainer">
        <Card>
          <CardText>
            <ItemName />
          </CardText>
        </Card>
      </Grid>
    </div>
  )
};

export default App;

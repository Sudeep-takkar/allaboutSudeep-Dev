import React from 'react';
import { Card } from 'material-ui/Card';
import { Grid } from 'grid-styled';
import { deepOrange500, purple700 } from 'material-ui/styles/colors';

const style = {
  cardContent: {
    textAlign: '-webkit-center',
  }
};

const TimeInfo = () => {
  return (
    <div>
      <Card>
        <Grid width={1 / 2} style={style.cardContent}>
          <h1 style={{color: deepOrange500}}>09:33</h1>
          <h5>Average In-Time</h5>
        </Grid>
        <Grid width={1 / 2} style={style.cardContent}>
          <h1 style={{color: purple700}}>17:46</h1>
          <h5>Average Out Time</h5>
        </Grid>
      </Card>
    </div>
  )
};

export default TimeInfo;

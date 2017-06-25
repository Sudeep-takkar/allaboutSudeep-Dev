import React, {Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {Box} from 'grid-styled';
import IconButton from 'material-ui/IconButton';
import Email from 'material-ui/svg-icons/communication/email';
import { cyan900,cyan700 } from 'material-ui/styles/colors';

const style = {
  cardText: {
    display: 'flex',
    alignItems: 'center'
  }
};

class ItemName extends Component {
  render() {
    return (
      <div>
        <Box my={2}>
          <Card style={{backgroundColor: 'red'}}>
            <CardText style={style.cardText}>
              <IconButton iconStyle={{fill: 'white'}}><Email /></IconButton>Item Name Here
            </CardText>
          </Card>
        </Box>
        <Box my={2}>
          <Card style={{backgroundColor: cyan700}}>
            <CardText style={style.cardText}>
              <IconButton><Email /></IconButton>Item Name Here
            </CardText>
          </Card>
        </Box>
        <Box my={2}>
          <Card style={{backgroundColor: cyan900}}>
            <CardText style={style.cardText}>
              <IconButton><Email /></IconButton>Item Name Here
            </CardText>
          </Card>
        </Box>
      </div>
    )
  }
}

export default ItemName;

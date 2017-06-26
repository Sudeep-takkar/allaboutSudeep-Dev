import React, {Component} from 'react';
import {Flex,Grid} from 'grid-styled';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const genderPercentage = {
  male: '10%',
  female: '90%'
};

const iconStyles = {
  marginRight: 24,
};

class ChartGender extends Component {
  render() {
    return (
      <div>
        <span>Gender</span>
      <div style={{height: '370px',display: '-webkit-box'}}>
        <div style={{height: '100px', backgroundColor: 'blue', width: genderPercentage.male}}>
         </div>
        <div style={{height: '100px', backgroundColor: 'pink', width: genderPercentage.female}}>
        </div>
      </div>
      </div>
    );
  }
}
;

export default ChartGender;
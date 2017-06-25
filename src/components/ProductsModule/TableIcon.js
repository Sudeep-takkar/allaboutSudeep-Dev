import React, {Component} from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import Ring from 'material-ui/svg-icons/image/panorama-fish-eye';
import IconButton from 'material-ui/IconButton';

const style ={
  padding_0:{
    padding: '0'
  }
};

class TableIcon extends Component {

  render() {
    return (
      <Table>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#FF4081'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>3.2</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#00838F'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>4.4</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#006064'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>9.6</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#B2EBF2'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>8.3</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#FF4081'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>5.6</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#B2EBF2'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>3.2</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#00838F'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>1.4</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#FF1744'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>11.2</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#D50000'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>10.4</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#FF4081'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>1.2</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#006064'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>8.9</TableRowColumn>
            <TableRowColumn style={ style.padding_0 }><IconButton iconStyle={{fill: '#18FFFF'}}><Ring /></IconButton></TableRowColumn>
            <TableRowColumn style={ style.padding_0 }>1.9</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default TableIcon;
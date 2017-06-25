import React, {Component} from 'react';
import {Table, TableBody, TableHeaderColumn, TableHeader, TableRow, TableRowColumn} from 'material-ui/Table';

class TableSale extends Component {

  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Predicted Sale</TableHeaderColumn>
            <TableHeaderColumn>Actual Sale</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows={true}>
          <TableRow>
            <TableRowColumn>500 units</TableRowColumn>
            <TableRowColumn>200 units</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>1600 units</TableRowColumn>
            <TableRowColumn>1600 units</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>1600 units</TableRowColumn>
            <TableRowColumn>1600 units</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>1600 units</TableRowColumn>
            <TableRowColumn>1600 units</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>1600 units</TableRowColumn>
            <TableRowColumn>1600 units</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }

}

export default TableSale;
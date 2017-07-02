import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { Flex} from 'grid-styled';


class EmployeeCount extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.data.title.toUpperCase()+' '+this.props.data.year}
        />
        <CardText>
          <Flex>{this.props.data.data}</Flex>
          Previous Year {this.props.data.previousYear}  {this.props.data.percent}
        </CardText>
      </Card>
    )
  }
}

export default EmployeeCount;
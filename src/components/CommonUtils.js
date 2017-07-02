import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link className="textDecorationNone" to="/" replace><MenuItem>Home</MenuItem></Link>
    <Link className="textDecorationNone" to="/attendance" replace><MenuItem>Attendance</MenuItem></Link>
    <Link className="textDecorationNone" to="/products" replace><MenuItem>Products</MenuItem></Link>
    <Link className="textDecorationNone" to="/employeeRegistration" replace><MenuItem>Employee Registration</MenuItem></Link>
  </IconMenu>
);

const CommmonUtils = () => {

  return(
    <AppBar iconElementRight={<Menu />} iconElementLeft={<Link to="/" className="textDecorationNone" replace><MenuItem>Sudeep Takkar</MenuItem></Link>}/>
  )
};

export default CommmonUtils;
import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';


import AttendanceModule from './components/AttendanceModule';
import ProductsModule from './components/ProductsModule';
import EmployeeRegistration from './components/EmployeeRegistration';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/attendance"><MenuItem>Attendance</MenuItem></Link>
    <Link to="/products"><MenuItem>Products</MenuItem></Link>
    <Link to="/employeeRegistration"><MenuItem>Employee Registration</MenuItem></Link>
  </IconMenu>
);

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <div>
        <AppBar iconElementRight={<Menu />}/>
        <Route exact path="/" component={AttendanceModule}/>
        <Route path="/attendance" component={AttendanceModule}/>
        <Route path="/products" component={ProductsModule}/>
        <Route path="/employeeRegistration" component={EmployeeRegistration}/>
      </div>
    </Router>
  )
};

export default App;

import React from 'react';
import AttendanceModule from './components/AttendanceModule';
import AppBar from 'material-ui/AppBar';
import ProductsModule from './components/ProductsModule';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import {Router, Route} from 'react-router';
import {createBrowserHistory} from 'history';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Attendance" />
    <MenuItem primaryText="Products"/>
  </IconMenu>
);

const App = () => {
  return (
    <div>
      <AppBar iconElementRight={<Menu />}/>
      {/*<ProductsModule />*/}
      <Router history={createBrowserHistory()}>
        <div>
          <Route exact path="/" component={AttendanceModule}/>
          <Route path="/products" component={ProductsModule}/>
          <Route path="/attendance" component={AttendanceModule}/>
        </div>
      </Router>
    </div>
  )
};

export default App;

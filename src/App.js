import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';


import AttendanceModule from './components/AttendanceModule';
import ProductsModule from './components/ProductsModule';
import EmployeeRegistration from './components/EmployeeRegistration';
import AboutSudeep from './components/AboutSudeep';
import DetailsSudeep from './components/DetailsSudeep';
import CommonUtils from './components/CommonUtils';
import DataDashboard from './components/DataDashboard';


const history = createHashHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <AboutSudeep />
        <CommonUtils />
        <Switch>
          <Route exact path="/" component={DetailsSudeep}/>
          <Route path="/attendance" component={AttendanceModule}/>
          <Route path="/products" component={ProductsModule}/>
          <Route path="/employeeRegistration" component={EmployeeRegistration}/>
          <Route path="/dataDashboard" component={DataDashboard}/>
        </Switch>
      </div>
    </Router>
  )
};

export default App;

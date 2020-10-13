import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/student/Dashboard';
import TeacherEvaluation from './views/student/TeacherEvaluation';
import OnlineEnrollment from './views/student/OnlineEnrollment';

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route 
        component={Login} 
        exact path="/" 
      />
      <Route 
        component={Dashboard} 
        exact path="/secured/Student" 
      />
      <Route 
        component={TeacherEvaluation} 
        exact path="/secured/Student/TeacherEvaluation" 
      />
      <Route 
        component={OnlineEnrollment}
        exact path="/secured/Student/OnlineEnrollment"
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


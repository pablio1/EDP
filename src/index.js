import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/student/Dashboard';
import TeacherEvaluation from './views/student/TeacherEvaluation';
import OnlineEnrollment from './views/student/enrollment/OnlineEnrollment';
import UploadGrade from './views/faculty/UploadGrades'
import StudentGrade from './views/student/StudentGrades';
import Faculty from './views/faculty/TeacherPage'
import ClassList from './views/faculty/ClassList'

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
      <Route
        component={UploadGrade}
        exact path="/secured/Faculty/UploadGrade"
      />
      <Route
        component={StudentGrade}
        exact path="/secured/Student/StudentGrades"
      />
      <Route
        component={Faculty}
        exact path="/secured/Faculty/"
      />
      <Route
        component={ClassList}
        exact path="/secured/Faculty/ClassList"
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


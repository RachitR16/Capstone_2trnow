import React from 'react';
import Home from './Components/Home';
import Student from './Components/Student';
import Tutor from './Components/Tutor';
import Student_Portal from './Components/Student_Portal';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student" exact component={Student} />
          <Route path="/tutor" exact component={Tutor} />
          <Route path="/student_portal" exact component={Student_Portal} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DreamControl from "./DreamControl";
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <Header/>
      <div class="row">
        <div class="col-md-2">
          <Sidebar/>
        </div>
        <div class="col-md-10">
          <Switch>
            <Route path="/signin">
              <Signin/>
            </Route>
            <Route path="/">
              <DreamControl/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

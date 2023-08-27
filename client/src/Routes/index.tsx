import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from '../components/Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/register" element={Register} /> */}
      </Switch>
    </Router>
  )
}

export default Routes;
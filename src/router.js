import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '@/modules/Home/router';
import Eposide from '@/modules/Episode/router';

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/1" />
      </Route>
      <Home />
      <Eposide />
    </Router>
  );
}

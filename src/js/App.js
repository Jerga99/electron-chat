
import React from 'react';
import HomeView from './views/Home';
import Navbar from './components/Navbar';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className='content-wrapper'>
        <Switch>
          <Route path="/settings">
            <h1>I am Settings View</h1>
          </Route>
          <Route path="/login">
            <h1>I am Login View</h1>
          </Route>
          <Route path="/register">
            <h1>I am Register View</h1>
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

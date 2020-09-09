
import React from 'react';

import HomeView from './views/Home';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';


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
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/settings">
            <SettingsView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

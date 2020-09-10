
import React from 'react';

import { Provider } from 'react-redux';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';

import Navbar from './components/Navbar';

import configureStore from './store';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Route path="/chat/:id">
              <ChatView />
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
    </Provider>
  )
}

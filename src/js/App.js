
import React, { useEffect } from 'react';

import { Provider } from 'react-redux';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';

import Navbar from './components/Navbar';

import configureStore from './store';
import { listenToAuthChanges } from './actions/auth';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const store = configureStore();

export default function App() {

  useEffect(() => {
    store.dispatch(listenToAuthChanges());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Switch>
            <Route path="/" exact>
              <WelcomeView />
            </Route>
            <Route path="/home">
              <HomeView />
            </Route>
            <Route path="/chat/:id">
              <ChatView />
            </Route>
            <Route path="/settings">
              <SettingsView />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

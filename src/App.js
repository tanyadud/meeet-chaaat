import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import VideoChat from './screens/VideoChat';
import LoginPage from './screens/Login';
import PrivateRoute from './components/PrivateRoute';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

export default () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/chat">
            <VideoChat />
          </PrivateRoute>
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

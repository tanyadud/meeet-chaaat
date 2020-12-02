import React, { Suspense } from 'react';
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


const LoadingMessage = () => <p>Loading</p>;

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingMessage />}>
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
      </Suspense>
    </Router>
  );
};

export default App;

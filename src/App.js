import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';

const VideoChat = lazy(() => import('./screens/VideoChat'));
const LoginPage = lazy(() => import('./screens/Login'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'));

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

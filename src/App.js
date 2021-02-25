import React, {lazy, Suspense} from 'react';
// import history from './history';
import {
  // BrowserRouter as Router,
  // Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import { Router } from 'react-router';

import VideoChat from './screens/VideoChat';
import SignInPage from './screens/SignIn';
import SignUpPage from './screens/SignUp';
import ConfirmPage from './screens/Confirm';
import PrivateRoute from './components/PrivateRoute';
import ErrorBoundary from './components/ErrorBoundary';

const LoadingMessage = () => <p>Loading</p>;

const App = () => {
  return (
    <Suspense fallback={<LoadingMessage/>}>
      <ErrorBoundary>
        {/*<Router history={history}>*/}
          <Switch>
            <Route exact path="/">
              <Redirect to="/sign-in"/>
            </Route>

            <Route exact path="/sign-in">
              <SignInPage/>
            </Route>
            <Route exact path="/sign-up">
              <SignUpPage/>
            </Route>
            <Route exact path="/confirm-email">
              <ConfirmPage/>
            </Route>

            <PrivateRoute path="/chat">
              <VideoChat/>
            </PrivateRoute>
          </Switch>
        {/*</Router>*/}
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';

import Home from './Home';
import SignIn from './SignIn';
import Header from './Header';

// Initialize Firebase
firebase.initializeApp({
  // Your Firebase config object goes here
});

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

function App() {
  const user = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header user={user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

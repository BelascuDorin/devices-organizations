import './App.css';
import Menu from 'components/Menu';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Devices from 'pages/Devices';
import Organizations from 'pages/Organizations';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import DeviceState from './context/devices/DeviceState';
import OrganizationState from 'context/organizations/OrganizationState';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#b4b3be',
      dark: '#7c7c7c',
      light: '#eef2fa',
    },
    secondary: {
      main: '#729ced',
      dark: '#2561d8',
      light: '#dde3f0',
    },
    error: {
      main: '#e42e31',
    },
    background: {
      main: '#f2f2f2',
      lightBlue: '#dae4f5',
      lightGrey: '#eef2fa',
    },
  },
  spacing: 4,
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <DeviceState>
        <OrganizationState>
          <Router>
            <div className={classes.root}>
              <CssBaseline />
              <Menu />
              <main className={classes.content}>
                <Switch>
                  <Route exact path='/devices' component={Devices} />
                  <Route
                    exact
                    path='/organizations'
                    component={Organizations}
                  />
                  <Route
                    render={() => <Redirect to={{ pathname: '/devices' }} />}
                  />
                </Switch>
              </main>
            </div>
          </Router>
        </OrganizationState>
      </DeviceState>
    </ThemeProvider>
  );
};

export default App;

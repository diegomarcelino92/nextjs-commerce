import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#37474f',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#__next': {
          minHeight: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
    },
  },
});

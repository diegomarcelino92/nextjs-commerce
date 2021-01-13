import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '#__next': {
          minHeight: 1000,
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
});

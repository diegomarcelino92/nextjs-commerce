import React, { useEffect } from 'react';

import { AppProps } from 'next/app';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from '../src/configuration/theme';

import Layout from '../src/components/Layout';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;

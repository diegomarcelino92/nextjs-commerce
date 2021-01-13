import { AppProps } from 'next/app';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from '../src/configuration/theme';

import Layout from '../src/components/Layout';

function App({ Component, pageProps }: AppProps) {
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

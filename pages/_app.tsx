import { AppProps } from 'next/app';

import { ThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from '../src/configuration/theme';

import Layout from '../src/components/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default App;

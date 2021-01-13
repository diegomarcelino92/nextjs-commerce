import React, { Fragment } from 'react';

import { Box } from '@material-ui/core';

import Header from '../Header';
import Footer from '../Footer';
import { MAX_WIDTH } from '../../helpers/theme';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" flex="1" maxWidth={MAX_WIDTH}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
